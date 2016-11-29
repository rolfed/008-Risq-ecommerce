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
		sum += parseInt($scope.products[productIndex].qty * productPrice, 10);

		// Return total
		return "| $" + sum;

	}
};