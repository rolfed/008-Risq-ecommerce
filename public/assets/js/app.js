'use strict'
var app = angular.module('risq', ['ngRoute'])



  
app.controller('EcomCtrl', EcomCtrl);

function EcomCtrl($scope){
	//console.log("EcomCtrl is loading.");

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

	/* Set Product Price */
	$scope.productPrice = productPrice;
	var productPrice = 3;

	$scope.product = $scope.products;

	/* Increase Item Count */
	$scope.increaseItemCount = function(product){
		product.qty++;
	};

	/* Decrease Item Count*/
	$scope.decreaseItemCount = function(product){
		if(product.qty > 0 ){
			product.qty--;
		};
	};

	/* Sumation Calculator */
	$scope.sumCalc = function(productIndex){
		// Set Starting Price
		var sum = 0;

		// Add/Sub Price
		console.log($scope.products[0]);
		sum += parseInt($scope.products[productIndex].qty * productPrice, 10);

		// Return total
		return "| $" + sum;

	}

	/* Add up total cost */
	$scope.totalCalc = function(){
	    var sum = 0;
	    var shipping = 5.00;
	    var tax = 2.50;

	    angular.forEach($scope.products, function(product, index){
	      sum += parseInt(product.qty * productPrice, 10);
	    });

	    var sumPlusTax = sum + tax;

	    return "$" + sumPlusTax + shipping;
	 };
};
app.controller('GlobalCtrl', GlobalCtrl);

function GlobalCtrl(){
	console.log("GlobalCtrl is loading");
	var vm = this; 
};


app.controller('MapCtrl', MapCtrl);

function MapCtrl(){
	console.log("MapCtrl is loading.");
};
app.directive('ecom', ecom);

function ecom(){
	var directive = {
		link: linkFunc,
		templateUrl: '../assets/views/_partials/ecom.html',
		$scope: {}
	}

	/* DOM Animation */
	/* Ecommerce animation code. View 1 is the button on the homepage. 
	View 2 is the add to cart button. View 3 is the product selection. 
	View 4 is the address form. View 5 is the credit card form. View 6 is
	the products have shipped view */
	
	function linkFunc($scope) {

		/* Ecommerce button animation - View 1 to View 2 */
		$scope.grabSome = function(){
			//console.log('GrabSome is loading.')
			var view1 = document.querySelector("#view-1");
			
			view1.style.opacity="0";
			
			setTimeout(function(){ 
				view1.className = "hidden";
			}, 1000);

			var view2 = document.querySelector('#view-2');
				console.log(view2);
				view2.style.right="0%";
			};

		/* AddToCart button animation - View 2 to View 3*/	
		$scope.addToCart = function(){
			var view2 = document.querySelector('#view-2');
			var view3 = document.querySelector('#view-3');
			var bg = document.querySelector('#ecom-image');
			
			setTimeout(function(){ 
		 		bg.className = "ecom-bg-change-background";
			}, 100);
			
			view3.style.right="0%";
			
			setTimeout(function(){ 
				view2.style.right="-50%";
			}, 100);
		};

		/* Address Form - View 3 to View 4 */
		$scope.addrInput = function(){
			//console.log("addrInput is loading");
			var view2 = document.querySelector('#view-2');
			var view3 = document.querySelector('#view-3');
			var view4 = document.querySelector('#view-4');
			view3.style.right="-100%";
			view2.style.right="-100%";
			view3.style.opacity="0";
			view4.style.right="100%";
		};

		$scope.form
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

	/* Load Directive */
	return directive;
}
app.directive('google-map', googleMap);

function googleMap(){
	var directive = {
		link: linkFunc,
		//templateUrl: '../assets/views/_partials/google-map.html',
		$scope: {}
	}
	/* DOM Animation */
	function linkFunc($scope){
		console.log('Google Map Directive Loading');
	};

	/* Load Directive */
	return directive;
};
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
