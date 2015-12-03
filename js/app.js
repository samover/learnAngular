var githubUserSearch = angular.module('GitUserSearch', ['ngResource']);

githubUserSearch.directive('searchForm', function() {
  return {
    restrict: 'E',
    templateUrl: '/partials/search-form.html'
  };
});

githubUserSearch.directive('searchResults', function() {
  return {
    restrict: 'E',
    templateUrl: '/partials/search-results.html'
  };
});
