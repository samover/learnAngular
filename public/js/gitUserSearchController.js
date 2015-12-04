(function() {
  var app = angular.module('github-search', []);

  app.controller('GitUserSearchController', ['$scope', 'Search', function($scope, Search) {
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

  app.directive('searchForm', function() {
    return {
      restrict: 'E',
      templateUrl: '/partials/search-form.html'
    };
  });

  app.directive('searchResults', function() {
    return {
      restrict: 'E',
      templateUrl: '/partials/search-results.html'
    };
  });

})();
