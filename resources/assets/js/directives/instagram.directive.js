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