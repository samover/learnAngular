githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {
  var self = this;
  var searchResource = $resource('http://api.github.com/search/users');

  self.doSearch = function() {
    self.searchResult = searchResource.get(
      {
        q: self.searchTerm
      }
    );

   };
  }]);
