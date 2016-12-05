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