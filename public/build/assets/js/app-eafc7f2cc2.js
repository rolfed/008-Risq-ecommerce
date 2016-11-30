'use strict'
var app = angular.module('risq', [
	'ngRoute',
	'uiGmapgoogle-maps'
]);



  
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
		//console.log($scope.products[0]);
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

function MapCtrl($scope, $http, uiGmapGoogleMapApi){
	console.log("MapCtrl is loading.");

	$scope.map = {
		center: {
			latitude: 44.944099,
          	longitude: -123.040283 }, 
        zoom: 12,
        markers : [
        		{	"id"			: 	1, 
        		  	"coords"		: 	{ "latitude": 44.942037, "longitude": -123.038386},
        		  	"title"			: 	"Tan Republic (Downtown)",
        		  	"streetAddress" : 	"285 Liberty St. NE suite 120",
        		  	"city" 			: 	"Salem",
        		  	"state"			: 	"OR",
        		  	"zip"  			: 	"97301"
                },
                { 	"id": 2, 
                	"coords"		: 	{ "latitude": 44.947236, "longitude": -122.982947 },
                  	"title"			: 	"Tan Republic (Lancaster)",
        		  	"streetAddress" : 	"1434 Lancaster Dr NE",
        		  	"city" 			: 	"Salem",
        		  	"state"			: 	"OR",
        		  	"zip"  			: 	"97301"
                },
                { 	"id"			: 	3, 
                	"coords"		: 	{ "latitude": 44.949759, "longitude": -122.993060 },
                	"title"         :   "Tan Republic (Market)",
   					"streetAddress" :   "1677 Hawthorne Ave NE",
   					"city"  		:   "Salem",
   					"state"			: 	"OR",
        		  	"zip"  			: 	"97301"

                },
                { 	"id"			: 	4, 
                	"coords"		: 	{ "latitude": 44.978344, "longitude": -123.02624960000003 },
                	"title"         :   "Tan Republic (Keizer)",
   					"streetAddress" :   "3640 River Rd N, Keizer",
   					"city"  		:   "Kaizer",
   					"state"			: 	"OR",
        		  	"zip"  			: 	"97303"
                 
                },
                { 	"id"			: 	5, 
                	"coords"		: 	{ "latitude": 44.951348, "longitude": -123.026250 },
                	"title"         :   "Tan Republic (West Salem)",
                	"streetAddress" :   "1124 Wallace Rd NW #115",
   					"city"  		:   "West Salem",
   					"state"			: 	"OR",
        		  	"zip"  			: 	"97304"

                }, 
                { 	"id"			: 	6, 
                	"coords"		: 	{ "latitude": 44.848276, "longitude": -123.233246 },
                	"title"         :   "Tan Republic (Monmouth)",
                	"streetAddress" :   "295 Main St E, Monmouth",
   					"city"  		:   "Monmouth",
   					"state"			: 	"OR",
        		  	"zip"  			: 	"97361"
                  
                }, 
                { 	"id"			: 	7, 
                	"coords"		: 	{ "latitude": 45.151513, "longitude": -122.603706 },
                 	"title"         :   "Tan Republic (Molalla)",
                	"streetAddress" :   "1515 W Main St, Molalla",
   					"city"  		:   "Molalla",
   					"state"			: 	"OR",
        		  	"zip"  			: 	"97038"
                },
                { 	"id"			: 	8, "coords": { "latitude": 45.005329, "longitude": -122.792868 },
                  	"coords"		: 	{ "latitude": 45.005329, "longitude": -122.792868},
                  	"title"         :   "Tan Republic (Silverton)",
                	"streetAddress" :   "703 McClaine St",
   					"city"  		:   "Silverton",
   					"state"			: 	"OR",
        		  	"zip"  			: 	"97381"
                },  
                { 	"id"			: 	9, 
                	"coords"		: 	{ "latitude": 45.152151, "longitude": -122.834714 },
                  	"title"         :   "Tan Republic (Woodburn)",
                	"streetAddress" :   "1537 Mt Hood Ave #108",
   					"city"  		:   "Woodburn",
   					"state"			: 	"OR",
        		  	"zip"  			: 	"97071"
                }, 
                { 	"id"			: 	10, 
                	"coords"		: 	{ "latitude": 45.267820, "longitude": -122.675359 },
					"title"         :   "Tan Republic (Canby)",
                	"streetAddress" :   "1477 SE 1st Ave Suite 104",
   					"city"  		:   "Canby",
   					"state"			: 	"OR",
        		  	"zip"  			: 	"97013"       	           
                },
                { 	"id"			: 	11, 
                	"coords"		: 	{ "latitude": 47.059847, "longitude": -122.768529 },
                  	"title"         :   "Tan Republic (Lacey)",
                	"streetAddress" :   "1380 Galaxy Dr NE E",
   					"city"  		:   "Lacey",
   					"state"			: 	"WA",
        		  	"zip"  			: 	"98516" 
                }, 
                { 	"id"			: 	12, 
                	"coords"		: 	{ "latitude": 44.926118, "longitude": -123.018043 },
 					"title"         :   "Bentley’s Coffee",
                	"streetAddress" :   "2195 Mission ST SE",
   					"city"  		:   "Salem",
   					"state"			: 	"OR",
        		  	"zip"  			: 	"98516"
                },
                { 	"id"			: 	13, 
                	"coords"		: 	{ "latitude": 44.989020, "longitude": -123.026873 },
                	"title"         :   "Bentley’s Coffee",
                	"streetAddress" :   "4435 River RD N",
   					"city"  		:   "Keizer",
   					"state"			: 	"OR",
        		  	"zip"  			: 	"97303"
    
                },
                { 	"id"			: 	14, 
                	"coords"		: 	{ "latitude": 44.989020, "longitude": -123.026873 },
                  	"title"         :   "US Market",
                	"streetAddress" :   "4435 River RD N",
   					"city"  		:   "Keizer",
   					"state"			: 	"OR",
        		  	"zip"  			: 	"97303"
                }, 
                { 	"id"			: 	15, 
                	"coords"		: 	{ "latitude": 44.968133, "longitude": -122.993562 },
                	"coords"		: 	{ "latitude": 44.989020, "longitude": -123.026873 },
                  	"title"         :   "US Market",
                	"streetAddress" :   "3295 Silverton RD NE",
   					"city"  		:   "Salem",
   					"state"			: 	"OR",
        		  	"zip"  			: 	"97301"
                }, 
                { 	"id"			: 	16, 
                	"coords"		: 	{ "latitude": 44.9495554, "longitude": -123.03220060000001 },
                	"title"         :   "US Market",
                	"streetAddress" :   "1030 Broadway St NE",
   					"city"  		:   "Salem",
   					"state"			: 	"OR",
        		  	"zip"  			: 	"97301"
                }, 
                { 	"id"			: 	17, 
                	"coords"		: 	{ "latitude": 44.9818495, "longitude": -123.024002600000022 },
                	"title"         :   "US Market",
                	"streetAddress" :   "3825 Cherry Ave",
   					"city"  		:   "Salem",
   					"state"			: 	"OR",
        		  	"zip"  			: 	"97301"
               		
                },
                { 	"id"			: 	18, 
                	"coords"		: 	{ "latitude": 44.912058, "longitude": -123.030335 },
                  	"title"         :   "US Market",
                	"streetAddress" :   "2904 12th St SE",
   					"city"  		:   "Salem",
   					"state"			: 	"OR",
        		  	"zip"  			: 	"97302"
                }, 
                { 	"id"			: 	19, 
                	"coords"		: 	{ "latitude": 44.951244, "longitude": -123.051933 },
                  	"title"         :   "Liquor Depot",
                	"streetAddress" :   "1148 Wallace Rd NW",
   					"city"  		:   "Salem",
   					"state"			: 	"OR",
        		  	"zip"  			: 	"97304"
                }, 
                { 	"id"			: 	20, 
                	"coords"		: 	{ "latitude": 44.968133, "longitude": -122.993562 },
                  	"title"         :   "Liquor Depot",
                	"streetAddress" :   "5107 Commercial St SE",
   					"city"  		:   "Salem",
   					"state"			: 	"OR",
        		  	"zip"  			: 	"97306"
                }, 
                { 	"id"			: 	21, 
                	"coords"		: 	{ "latitude": 44.941445, "longitude": -123.040391 },
                  	"title"         :   "Night Deposit",
                	"streetAddress" :   "195 Commercial St NE",
   					"city"  		:   "Salem",
   					"state"			: 	"OR",
        		  	"zip"  			: 	"97301"
                }, 
                { 	"id"			: 	22, 
                	"coords"		: 	{ "latitude": 44.939444, "longitude": -122.984596 },
                	"title"         :   "Midnite Sports Bar and Grille",
                	"streetAddress" :   "3960 Center St NE",
   					"city"  		:   "Salem",
   					"state"			: 	"OR",
        		  	"zip"  			: 	"97301"
                }, 
                { 	"id"			: 	23, 
                	"coords"		: 	{ "latitude": 42.4225512, "longitude": -123.34319210000001 },
                   	"title"         :   "Casablanca Coffee and Grille",
                	"streetAddress" :   "686 Union Ave",
   					"city"  		:   "Salem",
   					"state"			: 	"OR",
        		  	"zip"  			: 	"97527"
                },  
                { 	"id"			: 	24, 
                	"coords"		: 	{ "latitude": 46.974984, "longitude": -123.846542 },
                   	"title"         :   "Liquor Outlet",
                	"streetAddress" :   "2409 NW U.S. 101",
   					"city"  		:   "Lincoln City",
   					"state"			: 	"OR",
        		  	"zip"  			: 	"97367"
                },
                { 	"id"			: 	25, 
                	"coords"		: 	{ "latitude": 46.974984, "longitude": -123.846542 },
                   	"title"         :   "Lancaster Liquor",
                	"streetAddress" :   "698 Lancaster Dr NE",
   					"city"  		:   "Salem",
   					"state"			: 	"OR",
        		  	"zip"  			: 	"97306"
                },
                { 	"id"			: 	26, 
                	"coords"		: 	{ "latitude": 44.877805, "longitude": -123.028177 },
                   	"title"         :   "Express Food Mart",
                	"streetAddress" :   "686 Union Ave",
   					"city"  		:   "Salem",
   					"state"			: 	"OR",
        		  	"zip"  			: 	"97306"
                }, 
                { 	"id"			: 	27, 
                	"coords"		: 	{ "latitude": 44.908141, "longitude": -123.043392 },
                  	"title"         :   "South Salem Liquor Mart",
                	"streetAddress" :   "3320 Commercial ST SE",
   					"city"  		:   "Salem",
   					"state"			: 	"OR",
        		  	"zip"  			: 	"97302"
                }, 
                { 	"id"			: 	28, 
                	"coords"		: 	{ "latitude": 44.914419, "longitude": -122.980402 },
                  	"title"         :   "Shell Food Mart",
                	"streetAddress" :   "1491 Lancaster DR SE",
   					"city"  		:   "Salem",
   					"state"			: 	"OR",
        		  	"zip"  			: 	"97317"
                }, 
                { 	"id"			: 	29, 
                	"coords"		: 	{ "latitude": 44.911877, "longitude": -123.045491 },
                  	"title"         :   "South Salem Shell",
                	"streetAddress" :   "1491 Lancaster DR SE",
   					"city"  		:   "Salem",
   					"state"			: 	"OR",
        		  	"zip"  			: 	"97317"
                }, 
                { 	"id"            : 	30, 
                	"coords"		: 	{ "latitude": 44.919072, "longitude": -122.980999 },
                   	"title"         :   "EZ Food Mart",
                	"streetAddress" :   "770 Lancaster DR SE",
   					"city"  		:   "Salem",
   					"state"			: 	"OR",
        		  	"zip"  			: 	"97317"
                }, 
                { 	"id"			: 	31, 
                	"coords"		: 	{ "latitude": 44.904416, "longitude": -123.040890 },
                	"title"         :   "Chevron",
                	"streetAddress" :   "3514 Commercial ST SE",
   					"city"  		:   "Salem",
   					"state"			: 	"OR",
        		  	"zip"  			: 	"97302"
                },
                { 	"id"			: 	32, 
                	"coords"		: 	{ "latitude": 44.938967, "longitude": -123.041719 },
                  	"title"         :   "Downtown Salem Liquor",
                	"streetAddress" :   "263 Commercial ST SE",
   					"city"  		:   "Salem",
   					"state"			: 	"OR",
        		  	"zip"  			: 	"97302"
                },
                { 	"id"			: 	33, 
                	"coords"		: 	{ "latitude": 44.877196, "longitude": -123.027757 },
                  	"title"         :   "ARCO AM/PM",
                	"streetAddress" :   "5401 Commercial St SE",
   					"city"  		:   "Salem",
   					"state"			: 	"OR",
        		  	"zip"  			: 	"97306"
                },
                { 	"id"			: 	34, 
                	"coords"		: 	{ "latitude": 44.939583, "longitude": -123.039062 },
                  	"title"         :   "Frozation Nation",
                	"streetAddress" :   "155 Liberty ST SE #150",
   					"city"  		:   "Salem",
   					"state"			: 	"OR",
        		  	"zip"  			: 	"97301"
                },
                { 	"id"			: 	35, 
                	"coords"		: 	{ "latitude": 44.939583, "longitude": -123.039062 },
                  	"title"         :   "Keizer Shell FoodMart",
                	"streetAddress" :   "3401 River Rd. N",
   					"city"  		:   "Keizer",
   					"state"			: 	"OR",
        		  	"zip"  			: 	"97303"
                }
        ] 	
	}
};


app.directive('address', address);

function address(){
	var directive = {
		link: linkFunc,
		templateUrl: '../assets/views/_partials/addr.html',
		$scope: {}

	}

	/* DOM Animation */
	function linkFunc($scope){

	}

	/* Load Directive */
	return directive;
}
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
				//console.log(view2);
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
app.directive('uimap', uiMap);

function uiMap(){
	var directive = {
		link: linkFunc,
		templateUrl: '../assets/views/_partials/google-map.html',
		$scope: {}
	}
	/* DOM Animation */
	function linkFunc($scope){
		console.log('Google Map Directive Loading');

		$scope.markerClick = function(marker, x, y){
			console.log("Marker Clicked");
		    console.log(marker.model.coords);
		    console.log(marker);

		    var lat = marker.model.coords.latitude;
		    var long = marker.model.coords.longitude;

		    window.open("https://www.google.com/maps/dir/Current+Location/" + lat + "," + long);
		    console.log('markerClick is loading');

		 }
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
