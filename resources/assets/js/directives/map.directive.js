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