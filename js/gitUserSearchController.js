githubUserSearch.controller('GitUserSearchController', ['$scope', 'Search', function($scope, Search) {
  var self = this;

  $scope.doSearch = function() {
    Search.query($scope.searchTerm)
    .then(function(response) {
      self.searchResult = response.data;
    });
  };

  $scope.$watch('searchTerm', function(){
    $scope.searchTerm = ($scope.searchTerm === undefined) ? '' : $scope.searchTerm;
    if($scope.searchTerm.length > 0) {
      $scope.doSearch();
    }
  });
}]);
