app.directive('recipe', recipe);

function recipe(){

	/* Directive Attributes */
	var directive = {
		link: linkFunc,
		templateUrl: '../assets/views/_partials/recipe.html',
		$scope: {} 
	};

	/* DOM Animation */
	function linkFunc($scope){

		var recipeIndex = ['recipe', 'recipe2', 'recipe3', 'recipe4'];
		

		$scope.showRecipe = function(i){
			var el = document.getElementById(recipeIndex[i]);
			el.style.left="0px";
		}

		$scope.hideRecipe = function(i){
			var el = document.getElementById(recipeIndex[i]);
			el.style.left="-1500px";
		}
	};
	
	/* Load Tamplate */
	return directive;
};