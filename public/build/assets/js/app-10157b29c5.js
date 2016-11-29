'use strict'
var app = angular.module('risq', ['ngRoute'])



  
app.controller('EcomCtrl', EcomCtrl);

function EcomCtrl($scope){
	console.log("EcomCtrl is loading.");
	/* Load Products */
		$scope.products = [
		  {
		    "title": "Starter Pack",
		    "qty": "0",
		  },
		  {
		    "title" : "Strawberry Kiwi",
		    "qty" : "0",
		  },
		  {
		    "title" : "Peach Mango",
		    "qty" : "0"
		  },
		  {
		    "title" : "Watermelon",
		    "qty" : "0"
		  },
		  {
		    "title" : "Green Apple",
		    "qty" : "0"
		  }
		 ]
};
app.controller('GlobalCtrl', GlobalCtrl);

function GlobalCtrl(){
	console.log("GlobalCtrl is loading");
	var vm = this; 
};


app.directive('ecom', ecom);

function ecom(){
	var directive = {
		link: linkFunc,
		templateUrl: '../assets/views/_partials/ecom.html',
		$scope: {}
	}

	/* DOM Animation */
	function linkFunc($scope) {

	}

	/* Load Template */
	return directive;
};

app.directive('instagram', instagram);

function instagram(){
	var directive = {
		link: linkFunc,
		templateUrl: '../assets/views/_partials/instagram.html',
		$scope: {}
	};

	/* DOM Animation */
	function linkFunc($scope){
		/* Load Products */
		$scope.products = [
		  {
		    "title": "Starter Pack",
		    "qty": "0",
		  },
		  {
		    "title" : "Strawberry Kiwi",
		    "qty" : "0",
		  },
		  {
		    "title" : "Peach Mango",
		    "qty" : "0"
		  },
		  {
		    "title" : "Watermelon",
		    "qty" : "0"
		  },
		  {
		    "title" : "Green Apple",
		    "qty" : "0"
		  }
		  ]
	};

	/* Load Template */
	return directive;
}
app.directive('navigation', navigation);

function navigation(){
	return {
		templateUrl: '../assets/views/_partials/nav.html' 
	}
};
app.directive('recipe', recipe);

function recipe(){

	/* Directive Attributes */
	var directive = {
		link: linkFunc,
		templateUrl: '../assets/views/_partials/recipe.html',
		$scope: {} 
	};

	/* DOM Animation */
	function linkFunc($scope){

		var recipeIndex = ['recipe', 'recipe2', 'recipe3', 'recipe4'];
		

		$scope.showRecipe = function(i){
			var el = document.getElementById(recipeIndex[i]);
			el.style.left="0px";
		}

		$scope.hideRecipe = function(i){
			var el = document.getElementById(recipeIndex[i]);
			el.style.left="-1500px";
		}
	};
	
	/* Load Tamplate */
	return directive;
};
/** Routes **/
app.config(['$routeProvider', function($routeProvider) {

  $routeProvider
  // Home
  .when('/', {
    templateUrl: '../assets/views/homePage.html',
    controller: 'GlobalCtrl',
    controllerAs: 'vm'
  })

  // 404
  .otherwise('/404', {
    templateUrl: '../assets/views/404.html',
    controller: 'GlobalCtrl',
  })

}]);
//# sourceMappingURL=app.js.map
