(function(){
	'use strict'
	var risq = angular.module('risq', ['ngRoute'])

	.config(['$locationProvider', '$routeProvider', function(){
		$locationProvider.hashPrefix('');

		$routeProvider.otherwise({redirectTo: '/home'});
}]);
  
//# sourceMappingURL=app.js.map
