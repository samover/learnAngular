(function() {
  var app = angular.module('github-profiles', []);

  app.controller('ProfileController', ['$http', function($http) {
    var self = this;

    self.profile = {};

    self.getProfile = function(url) {
      $http.get(url).then(function(data) {
        self.profile = data;
      });
    };
  }]);
})();
