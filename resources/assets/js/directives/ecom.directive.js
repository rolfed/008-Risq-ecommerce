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