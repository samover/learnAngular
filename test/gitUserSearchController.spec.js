describe('GitUserSearchController', function() {
  var ctrl,
  searchFake,
  scope,
  items;

  items = [
    {
      "login": "tansaku",
      "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3",
      "html_url": "https://github.com/tansaku"
    },
    {
      "login": "stephenlloyd",
      "avatar_url": "https://avatars.githubusercontent.com/u/196474?v=3",
      "html_url": "https://github.com/stephenlloyd"
    }
  ];

  beforeEach (module('GitUserSearch'));

  beforeEach(function(){
    // Create a spy object fakeSearch which responds to method 'query'
    searchFake = jasmine.createSpyObj('searchFake', ["query"]);
    // Basically: when controller calls Search, test uses searchFake
    module({ Search: searchFake });
  });

  beforeEach(inject(function($controller, Search, $q, $rootScope) {
    scope = $rootScope;
    ctrl = $controller('GitUserSearchController');
    
    searchFake.query.and.returnValue($q.when({data: {items: items}}));
  }));

  it('initialises with an empty search result and term', function() {
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });

  describe('when searching for a user', function() {

    it('displays search results', function()  {
      ctrl.searchTerm = 'hello';
      ctrl.doSearch();
      scope.$apply();  
      expect(ctrl.searchResult.items).toEqual(items);
    });
  });

});
