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