app.factory('Search', ['$http', 'ENV', function($http, ENV) {
  var queryUrl = 'https://api.github.com/search/users';

  return {
    query: function(searchTerm) {
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          'q': searchTerm,
          'access_token': ENV.github_token
        }
      });
    }
  };
}]);
