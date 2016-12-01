app.controller('EcomCtrl', EcomCtrl);

function EcomCtrl($scope){
	//console.log("EcomCtrl is loading.");

	/* Load Products */
		$scope.products = [
			{
			"title": "Starter Pack",
			"qty": "0"
			},
			{
			"title" : "Strawberry Kiwi",
			"qty" : "0"
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
		console.log(product.qty);
		product.qty++;

		/* Update products object */
		$scope.products.push({ })
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

	/* Add up product total cost */
	$scope.subTotal = function(){
		//console.log('Subtotal function is loading');
		var sum = 0;

		angular.forEach($scope.products, function(product, index){
			sum += parseInt(product.qty * productPrice, 10);
		})

		return "$" + sum + ".00";
	};

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




