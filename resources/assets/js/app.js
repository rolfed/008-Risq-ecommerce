'use strict'
var app = angular.module('risq', [
	'ngRoute',
	'uiGmapgoogle-maps',
	'angular-stripe'
])
.config(function (stripeProvider) {
    stripeProvider.setPublishableKey("pk_test_bUH3O6nDbsq0olDgE7h9L2fv");
 });




  