'use strict'
var app = angular.module('risq', [
	'ngRoute',
	'uiGmapgoogle-maps',
	'angular-stripe'
])
.config(function (stripeProvider, uiGmapGoogleMapApiProvider) {
    stripeProvider.setPublishableKey("pk_test_bUH3O6nDbsq0olDgE7h9L2fv");
	uiGmapGoogleMapApiProvider.configure({ key: 'AIzaSyAzN29aDknykQyTUmAWJapI_z_Mu7wKv3Q' });
 });




  