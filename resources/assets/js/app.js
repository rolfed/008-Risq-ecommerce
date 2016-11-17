//Declare Angular App
'use strict';

angular.module('myApp', [
	'ngRoute',
	'myApp.homePage',
	'myApp.order',
	'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);


