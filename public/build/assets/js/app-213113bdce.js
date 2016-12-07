'use strict'
var app = angular.module('risq', [
	'ngRoute',
	'uiGmapgoogle-maps',
	'angular-stripe'
])
.config(function (stripeProvider) {
    stripeProvider.setPublishableKey("pk_test_bUH3O6nDbsq0olDgE7h9L2fv");
 });




  
app.controller('EcomCtrl', EcomCtrl);

function EcomCtrl($scope){
	//console.log("EcomCtrl is loading.");

	/* Load Products */
		$scope.products = [
			{
			"title": "Starter Pack",
			"qty": "0",
			"price" : "24",
			"sumTotal" : "0",
			"productId" : "prod_9fjULLhpSWdos0"
			},
			{
			"title" : "Strawberry Kiwi",
			"qty" : "0",
			"price" : "3",
			"sumTotal" : "0",
			"productId" : "prod_9fjaGgoyKguDGk"
			},
			{
			"title" : "Peach Mango",
			"qty" : "0",
			"price" : "3",
			"sumTotal" : "0",
			"productId" : "prod_9fjbTsLbAFNrZE"
			},
			{
			"title" : "Watermelon",
			"qty" : "0",
			"price" : "3",
			"sumTotal" : "0",
			"productId" : "prod_9fjnXogq3IJUf6"
			},
			{
			"title" : "Green Apple",
			"qty" : "0",
			"price" : "3",
			"sumTotal" : "0",
			"productId" : "prod_9fjocJbGILnh7q"
			}
		 ]

	/* Set Product Price */
	// $scope.productPrice = productPrice;
	// var productPrice = 3;

	$scope.product = $scope.products;

	$scope.totalSum = 0; 
	$scope.shipping = 0; 
	$scope.tax = 0;

	/* Increase Item Count */
	$scope.increaseItemCount = function(product){
		//console.log(product.qty);
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
		sum += parseInt($scope.products[productIndex].qty * $scope.products[productIndex].price, 10);

		// Return total
		return "| $" + sum;

	}

	/* Add up product total cost */
	$scope.subTotal = function(){
		//console.log('Subtotal function is loading');
		var sum = 0;

		angular.forEach($scope.products, function(product, index){
			var totalProductCost = parseInt(product.qty * product.price, 10);

			sum += totalProductCost;
			product.sumTotal = totalProductCost;
		})

		$scope.totalSum = sum;

		return "$" + sum + ".00";
	};

	/* Add up total cost */
	$scope.totalCalc = function(){

	    // angular.forEach($scope.products, function(product, index){
	    //   sum += parseInt(product.qty * productPrice, 10);
	    // });
	    /* Add shipping if cost is over $24 */
	    if(!($scope.totalSum >= 24)) {
	    	$scope.shipping = 5
	    } else {
	    	$scope.shipping = 0;
	    };

	    $scope.objTotal = {
	    	sum : $scope.totalSum,
	    	shipping : $scope.shipping,
	    	tax : $scope.tax,
	    	product : $scope.productId
	    };

	    var sumPlusTax = $scope.totalSum + $scope.tax;

	    return "$" + (sumPlusTax + $scope.shipping) + ".00";
	 }; 


};





app.controller('GlobalCtrl', GlobalCtrl);

function GlobalCtrl(){
	console.log("GlobalCtrl is loading");
	var vm = this; 
};


app.controller('MapCtrl', MapCtrl);

function MapCtrl($scope, $http){
	//console.log("MapCtrl is loading.");

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
            "s      tate"			: 	"OR",
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
            "coords"		: 	{ "latitude": 44.975472, "longitude": -123.027537 },
            "title"         :   "Keizer Shell FoodMart",
            "streetAddress" :   "3401 River Rd. N",
            "city"  		:   "Keizer",
            "state"			: 	"OR",
            "zip"  			: 	"97303"
            },
            { 	"id"			: 	36, 
            "coords"		: 	{ "latitude": 44.918897, "longitude": -123.045136 },
            "title"         :   "Texaco",
            "streetAddress" :   "2315 Commercial",
            "city"  		:   "Salem",
            "state"			: 	"OR",
            "zip"  			: 	"97302"
            },
            { 	"id"			: 	37, 
            "coords"		: 	{ "latitude": 44.921495, "longitude": -123.044290 },
            "title"         :   "Daynight Donuts",
            "streetAddress" :   "1980 Commercial St. SE",
            "city"  		:   "Salem",
            "state"			: 	"OR",
            "zip"  			: 	"97302"
            },
            { 	"id"			: 	38, 
            "coords"		: 	{ "latitude": 44.921435, "longitude": -123.031033 },
            "title"         :   "12th st. Market",
            "streetAddress" :   "1695 12th st. SE",
            "city"  		:   "Salem",
            "state"			: 	"OR",
            "zip"  			: 	"97302"
            },
            { 	"id"			: 	39, 
            "coords"		: 	{ "latitude": 44.927184, "longitude": -123.028897 },
            "title"         :   "Chevron",
            "streetAddress" :   "1098 13th ST. SE",
            "city"  		:   "Salem",
            "state"			: 	"OR",
            "zip"  			: 	"97302"
            },
            { 	"id"			: 	40, 
            "coords"		: 	{ "latitude": 44.961492, "longitude": -122.983009 },
            "title"         :   "Neighborhood Market & Deli",
            "streetAddress" :   "2620 Lancaster DR. NE",
            "city"  		:   "Salem",
            "state"			: 	"OR",
            "zip"  			: 	"97305"
            },
            { 	"id"			: 	41, 
            "coords"		: 	{ "latitude": 44.939583, "longitude": -123.039062 },
            "title"         :   "Breakpoint Coffee Co.",
            "streetAddress" :   "1120 Commercial St. SE",
            "city"  		:   "Salem",
            "state"			: 	"OR",
            "zip"  			: 	"97302"
            },
            { 	"id"			: 	42, 
            "coords"		: 	{ "latitude": 44.958146, "longitude": -123.017098 },
            "title"         :   "Daynight Donuts",
            "streetAddress" :   "2234 Fairgrounds Rd. N",
            "city"  		:   "Salem",
            "state"			: 	"OR",
            "zip"  			: 	"97301"
            },
            { 	"id"			: 	43, 
            "coords"		: 	{ "latitude": 44.987652, "longitude": -123.026291 },
            "title"         :   "7 Eleven",
            "streetAddress" :   "4380 River Rd. N",
            "city"  		:   "Salem",
            "state"			: 	"OR",
            "zip"  			: 	"97303"
            },
            { 	"id"			: 	44, 
            "coords"		: 	{ "latitude": 44.951832, "longitude": -123.021646 },
            "title"         :   "7 Eleven",
            "streetAddress" :   "1516 Capitol St. N",
            "city"  		:   "Salem",
            "state"			: 	"OR",
            "zip"  			: 	"97301"
            },
            { 	"id"			: 	45, 
            "coords"		: 	{ "latitude": 44.997704, "longitude": -123.026658 },
            "title"         :   "Keizer Liquor",
            "streetAddress" :   "5021 River RD. N",
            "city"  		:   "Salem",
            "state"			: 	"OR",
            "zip"  			: 	"97303"
            },
            { 	"id"			: 	46, 
            "coords"		: 	{ "latitude": 44.951832, "longitude": -123.021646 },
            "title"         :   "7 Eleven",
            "streetAddress" :   "219 Wallace RD.",
            "city"  		:   "Salem",
            "state"			: 	"OR",
            "zip"  			: 	"97304"
            },
            { 	"id"			: 	47, 
            "coords"		: 	{ "latitude": 44.620991, "longitude": -123.072349 },
            "title"         :   "US Market",
            "streetAddress" :   "2211 Waverly DR #7 SE",
            "city"  		:   "Albany",
            "state"			: 	"OR",
            "zip"  			: 	"97322"
            },
            { 	"id"			: 	48, 
            "coords"		: 	{ "latitude": 44.620991, "longitude": -123.072349 },
            "title"         :   "US Market",
            "streetAddress" :   "2211 Waverly DR #7 SE",
            "city"  		:   "Albany",
            "state"			: 	"OR",
            "zip"  			: 	"97322"
            },
            { 	"id"			: 	49, 
            "coords"		: 	{ "latitude": 44.609986, "longitude": -123.089609 },
            "title"         :   "US Market",
            "streetAddress" :   "1012 34th Ave SE",
            "city"  		:   "Albany",
            "state"			: 	"OR",
            "zip"  			: 	"97322"
            },
            { 	"id"			: 	50, 
            "coords"		: 	{ "latitude": 44.624812, "longitude": -123.090503 },
            "title"         :   "US Market",
            "streetAddress" :   "1709 Hill St",
            "city"  		:   "Albany",
            "state"			: 	"OR",
            "zip"  			: 	"97322"
            },
            { 	"id"			: 	51, 
            "coords"		: 	{ "latitude": 44.831115, "longitude": -122.794712 },
            "title"         :   "Stop n Save",
            "streetAddress" :   "104 NW Starr St.",
            "city"  		:   "Sublimity",
            "state"			: 	"OR",
            "zip"  			: 	"97385"
            },
            { 	"id"			: 	52, 
            "coords"		: 	{ "latitude": 44.961865, "longitude": -123.028939 },
            "title"         :   "7 Eleven",
            "streetAddress" :   "490 Pine St. NE",
            "city"  		:   "Salem",
            "state"			: 	"OR",
            "zip"  			: 	"97301"
            },
            { 	"id"			: 	53, 
            "coords"		: 	{ "latitude": 44.983498, "longitude": -122.984039 },
            "title"         :   "AM/PM Arco",
            "streetAddress" :   "4433 Lancaster DR. N",
            "city"  		:   "Salem",
            "state"			: 	"OR",
            "zip"  			: 	"97301"
            },
            { 	"id"			: 	54, 
            "coords"		: 	{ "latitude": 44.641940, "longitude": -123.064434 },
            "title"         :   "Tom Tom's Deli - Chevron",
            "streetAddress" :   "321 Airport RD. SE",
            "city"  		:   "Albany",
            "state"			: 	"OR",
            "zip"  			: 	"97322"
            },
            { 	"id"			: 	55, 
            "coords"		: 	{ "latitude": 44.636863, "longitude": -123.102728 },
            "title"         :   "7 Eleven",
            "streetAddress" :   "222 SE 2nd st",
            "city"  		:   "Albany",
            "state"			: 	"OR",
            "zip"  			: 	"97321"
            },
            { 	"id"			: 	55, 
            "coords"		: 	{ "latitude": 44.636863, "longitude": -123.102728 },
            "title"         :   "7 Eleven",
            "streetAddress" :   "222 SE 2nd st",
            "city"  		:   "Albany",
            "state"			: 	"OR",
            "zip"  			: 	"97321"
            },
            { 	"id"			: 	56, 
            "coords"		: 	{ "latitude": 44.625497, "longitude": -123.082408 },
            "title"         :   "7 Eleven",
            "streetAddress" :   "1815 Queen Ave",
            "city"  		:   "Albany",
            "state"			: 	"OR",
            "zip"  			: 	"97322"
            },
            { 	"id"			: 	57, 
            "coords"		: 	{ "latitude": 44.581306, "longitude": -123.259376 },
            "title"         :   "US market",
            "streetAddress" :   "1450 NW 9th ST",
            "city"  		:   "Corvallis",
            "state"			: 	"OR",
            "zip"  			: 	"97322"
            },
            { 	"id"			: 	58, 
            "coords"		: 	{ "latitude": 44.972656, "longitude": -123.029605 },
            "title"         :   "Express Food Mart",
            "streetAddress" :   "3185 River RD NW",
            "city"  		:   "Salem",
            "state"			: 	"OR",
            "zip"  			: 	"97303"
            },
            { 	"id"			: 	59, 
            "coords"		: 	{ "latitude": 44.581306, "longitude": -123.259376 },
            "title"         :   "AM/PM",
            "streetAddress" :   "33200 HWY 34 SE",
            "city"  		:   "Albany",
            "state"			: 	"OR",
            "zip"  			: 	"97322"
            },
            { 	"id"			: 	60, 
            "coords"		: 	{ "latitude": 44.569103, "longitude": -123.279632 },
            "title"         :   "Superette Market",
            "streetAddress" :   "2531 NW Monroe AVE.",
            "city"  		:   "Corvallis",
            "state"			: 	"OR",
            "zip"  			: 	"97330"
            },
            { 	"id"			: 	61, 
            "coords"		: 	{ "latitude": 44.581306, "longitude": -123.259376 },
            "title"         :   "7 Eleven",
            "streetAddress" :   "10765 SW Greenburg RD.",
            "city"  		:   "Tigard",
            "state"			: 	"OR",
            "zip"  			: 	"97223"
            },
            { 	"id"			: 	62, 
            "coords"		: 	{ "latitude": 44.581306, "longitude": -123.259376 },
            "title"         :   "7 Eleven",
            "streetAddress" :   "14641 Millikan RD.",
            "city"  		:   "Beaverton",
            "state"			: 	"OR",
            "zip"  			: 	"97006"
            },
            { 	"id"			: 	63, 
            "coords"		: 	{ "latitude": 45.495218, "longitude": -122.827856 },
            "title"         :   "7 Eleven",
            "streetAddress" :   "14641 Millikan RD.",
            "city"  		:   "Beaverton",
            "state"			: 	"OR",
            "zip"  			: 	"97006"
            },
            { 	"id"			: 	64, 
            "coords"		: 	{ "latitude": 45.495218, "longitude": -122.827856 },
            "title"         :   "Stop n Save",
            "streetAddress" :   "210 Main St",
            "city"  		:   "Aumsville",
            "state"			: 	"OR",
            "zip"  			: 	"97325"
            },
            { 	"id"			: 	65, 
            "coords"		: 	{ "latitude": 44.840368, "longitude": -122.867183 },
            "title"         :   "Stop n Save",
            "streetAddress" :   "210 Main St",
            "city"  		:   "Aumsville",
            "state"			: 	"OR",
            "zip"  			: 	"97325"
            },
            { 	"id"			: 	66, 
            "coords"		: 	{ "latitude": 45.186815, "longitude": -122.799987 },
            "title"         :   "76",
            "streetAddress" :   "4515 N. Pacific Hwy",
            "city"  		:   "Hubbard",
            "state"			: 	"OR",
            "zip"  			: 	"97032"
            },
            { 	"id"			: 	67, 
            "coords"		: 	{ "latitude": 44.936799, "longitude": -122.983391 },
            "title"         :   "AM/PM",
            "streetAddress" :   "501 Lancaster DR NE",
            "city"  		:   "Salem",
            "state"			: 	"OR",
            "zip"  			: 	"97301"
            },
            { 	"id"			: 	68, 
            "coords"		: 	{ "latitude": 44.936799, "longitude": -122.983391 },
            "title"         :   "Shell FoodMart",
            "streetAddress" :   "501 Lancaster DR NE",
            "city"  		:   "Salem",
            "state"			: 	"OR",
            "zip"  			: 	"97301"
            },
            { 	"id"			: 	69, 
            "coords"		: 	{ "latitude": 44.989374, "longitude": -123.027003 },
            "title"         :   "Astro Keizer FoodMart",
            "streetAddress" :   "4495 River RD. N.",
            "city"  		:   "Keize",
            "state"			: 	"OR",
            "zip"  			: 	"97303"
            }
        ] 	
	}
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

  // Mobile Ecommerce 
  .when('/ecom-mobile', {
    templateUrl: '../assets/views/_partials/mobile-ecom.html',
    controller: 'EcomCtrl',
    controllerAs: 'vm'
  })

  // 404
  .otherwise('/404', {
    templateUrl: '../assets/views/404.html',
    controller: 'GlobalCtrl',
  })

}]);
app.directive('address', address);

function address(){
	var directive = {
		link: linkFunc,
		templateUrl: '../assets/views/_partials/addr.html',
		$scope: {}

	}

	/* DOM Animation */
	function linkFunc($scope){
		

		$scope.viewMore = function(){
			var el = document.getElementById('address-wrapper');
			var height = el.offsetHeight;
		
			if(height < 2049){
				var newHeight = height + 215;
				el.style.height = newHeight + 'px';

		    } 

		}
	}

	/* Load Directive */
	return directive;
}; 
app.directive('ecom', ecom);

function ecom(){

	var directive = {
		link: linkFunc,
		templateUrl: '../assets/views/_partials/ecom.html',
		scope: {
			csrfToken : '@',
			objTotal : '@'
		},
		transclude: true,
	}

	/* DOM Animation */
	/* Ecommerce animation code. View 1 is the button on the homepage. 
	View 2 is the add to cart button. View 3 is the product selection. 
	View 4 is the address form. View 5 is the credit card form. View 6 is
	the products have shipped view */
	
	function linkFunc($scope) {
		
		/* Stripe payment */
        var $form = $('#payment-form');
        console.log($form);

        function stripeResponseHandler(status, response) {
            if (response.error) {
                $form.find('.payment-errors').text(response.error.message);
                $form.find('#submit-form').prop('disabled', false);
            } else {
                var token = response.id;
                $form.append($('<input type="hidden" name="stripeToken">').val(token));
                $form.find('#submit-form').prop('disabled', false);
                $form.get(0).submit();
            }
        };

        $form.submit(function(event) {
            $form.find('#submit-form').prop('disabled', true);
            Stripe.card.createToken($form, stripeResponseHandler);
            return false;  
        });
      


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


		// $scope.preventAddToCard = function(){
		// 	console.log($scope.totalSum);
		// 	//Prevent default 
		// 	if($scope.totalSum === 0) {
		// 		console.log('no products');
		// 		addToCart().preventDefault();
		// 	};

		// 	return preventAddToCard();
		// };

		/* AddToCart button animation - View 2 to View 3*/	
		$scope.addToCart = function(preventAddToCard){

			//$scope.preventAddToCard();

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
		$scope.checkout = function(){
			//console.log("addrInput is loading");
			var view2 = document.querySelector('#view-2');
			var view3 = document.querySelector('#view-3');
			var view4 = document.querySelector('#view-4');
			view3.style.right="-100%";
			view2.style.right="-100%";
			view3.style.opacity="0";
			view4.style.right="0";
		};

		/* Payment Form - View 4 to View 5 */
		$scope.paymentInput = function(){
			console.log('Add Payment Info')
			var view2 = document.querySelector('#view-2');
			var view4 = document.querySelector('#view-4');
			var view5 = document.querySelector('#view-5');
			view4.style.right="-100%";
			view4.style.opacity="0";
			
			view2.classList.toggle('hidden');

			setTimeout(function(){ 
				view4.classList.toggle('hidden');
				view5.style.right="0";
				//view5.classList.toggle('hidden');
			}, 100);
			
		}

	};
	/* Load Template */
	return directive;
};
app.directive('ftr', ftr);

function ftr(){
	var directive = {
		link: linkFunc,
		templateUrl: '../assets/views/_partials/footer.html',
		$scope: {}
	};

	/* DOM Animation */
	function linkFunc(){

	};

	/* Load Directive */
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
		//console.log('Google Map Directive Loading');

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
app.directive('mobile-ecom', mobile);

function mobile(){
	var directive = {
		link: linkFunc,
		templateUrl: '../assets/views/_partials/mobile-ecom.html',
		$scope: {}
	}

	function linkFunc(){
		
	};

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
//# sourceMappingURL=app.js.map
