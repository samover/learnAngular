Angular: some things to remember
================================

$httpBackend
------------

This is a **sercvice in module ngMock**, and is used for unit testing apps that
use the $http service. It provides a fake HTTP backend, so that during our unit
testing we don't depend on external dependencies and our tests run much faster.

A test should verify:
 * that a request has been sent or not OR
 * that what app requests and mocked response correspond

Usage: 

- inject the $httpBackend mock into the application in the test like this:
  `beforeEach(inject(function($httpBackend) { ... }));`

- either have a *request expectation* or a *backend definition*

- use `httpBackend.flush()` to flush pending requests so test run synchronously


brew / bower / npm
------------------

* NPM: most used for developer tools, since it uses a nested dependency tree
  which is great for avoiding dependency conflicts

* BOWER: has flat dependency tree and is thus better for front-end, since it
  less resource heavy for the user since it requires only one version for each
  package

Common usage: use Bower for packages published on websites, npm for testing,
building etc... Often for the latter a combination of both.

* BREW instead is a osx package manager and is not specific to development.


factories
---------

Controllers should stay thin and logic-free. So where to put all that beautiful
code your wrote?

Angular has three concepts to help organize code and which can be injected into
objects on a need-only basis (Ang has built-in service like $http and
$resource): 

* services
* factories
* providers

In baby language: services and factories are a recipe for the injector on how to
fabricate an object. For example: 


A factory RETURNS something: an object, a primitve, a function.

```javascript
app.factory('calculateFactory', function() {
  return {
    add: function(x, y) {
      return x + y;
    }
  }
});
```

A service CREATES a new object:

```javascript
app.service('calculator', function() {
  this.add = function(x, y) {
    return x + y;
  }
});
```

At this point, inject them into a controller:

```javascript
app.controller('someCtrl', ['calculateFactory', function(calculateFactory) {
  ...
  var sum = calculatedFactory.add(3, 5); // returns 8
}]);
```

```javascript
app.controller('someCtrl', ['calculator', function(calculator) {
  ...
  var calc = new Calculator();
  var sum = calc.add(3, 5); 
}]);
```
