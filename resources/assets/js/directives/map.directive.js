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