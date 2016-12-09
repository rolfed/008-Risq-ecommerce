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
			var addressHeight = document.getElementById("address-wrapper");
			console.log(addressHeight);
		
			if(height < 2250){
				var newHeight = height + 215;
				el.style.height = newHeight + 'px';

		    } 

		}
	}

	/* Load Directive */
	return directive;
}; 