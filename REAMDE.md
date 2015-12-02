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





