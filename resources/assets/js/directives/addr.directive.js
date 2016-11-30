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