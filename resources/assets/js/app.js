'use strict'
var app = angular.module('risq', [
	'ngRoute',
	'uiGmapgoogle-maps',
	'angular-stripe'
])
.config(function (stripeProvider, uiGmapGoogleMapApiProvider) {
    stripeProvider.setPublishableKey("pk_live_AAi5FMJd9iLYB63WNZ2KU00R");
	uiGmapGoogleMapApiProvider.configure({ key: 'AIzaSyAzN29aDknykQyTUmAWJapI_z_Mu7wKv3Q' });
 });




  