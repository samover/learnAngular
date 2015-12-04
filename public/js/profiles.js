(function() {
  var app = angular.module('github-profiles', []);

  app.controller('ProfileController', ['$http', function($http) {
    var self = this;

    self.isSet = function(tabNumber) {
      return self.tab === tabNumber;
    };

    self.setProfile = function($event) {
      $event.preventDefault();
      self.tab = parseInt($event.target.id);
      self.getProfile($event.target.href);
    };

    self.getProfile = function(url) {
      $http.get(url).then(function(response) {
        self.data = response.data;
      });
    };
  }]);
})();
