describe('GitUserSearchController', function() {
  var ctrl,
  mockSearch,
  searchFake,
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
    searchFake = jasmine.createSpyObj('fakeSearch', ["query"]);
    module({ Search: searchFake });
  });

  var scope; 
  beforeEach(inject(function($controller, Search, $q, $rootScope) {
    scope = $rootScope;

    ctrl = $controller('GitUserSearchController');
    
    searchFake.query.and.returnValue($q.when({data: {items: items}}))
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
