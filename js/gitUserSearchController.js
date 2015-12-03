githubUserSearch.controller('GitUserSearchController', ['Search', function(Search) {
  var self = this;
  var q = self.searchTerm;

  self.doSearch = function() {
    Search.query(self.searchTerm)
    .then(function(response) {
      self.searchResult = response.data;
    });
  };
}]);
