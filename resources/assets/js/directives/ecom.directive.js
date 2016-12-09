app.directive('ecom', ecom);

function ecom(){

	var directive = {
		link: linkFunc,
		templateUrl: '../assets/views/_partials/ecom.html',
		scope: {
			csrfToken : '@',
			objTotal : '@'
		},
		transclude: true,
	}

	/* DOM Animation */
	/* Ecommerce animation code. View 1 is the button on the homepage. 
	View 2 is the add to cart button. View 3 is the product selection. 
	View 4 is the address form. View 5 is the credit card form. View 6 is
	the products have shipped view */
	
	function linkFunc($scope, $event) {
		
		/* Stripe payment */
        var $form = $('#payment-form');
        //console.log($form);

        function stripeResponseHandler(status, response) {
            if (response.error) {
                $form.find('.payment-errors').text(response.error.message);
                $form.find('#submit-form').prop('disabled', false);
            } else {
                var token = response.id;
                $form.append($('<input type="hidden" name="stripeToken">').val(token));
                $form.find('#submit-form').prop('disabled', false);
                $form.get(0).submit();
            }
        };

        $form.submit(function(event) {
            $form.find('#submit-form').prop('disabled', true);
            Stripe.card.createToken($form, stripeResponseHandler);
            return false;  
        });
      


		/* Ecommerce button animation - View 1 to View 2 */
		$scope.grabSome = function(){
			//console.log('GrabSome is loading.')
			var view1 = document.querySelector("#view-1");
			
			view1.style.opacity="0";
			
			setTimeout(function(){ 
				view1.className = "hidden";
			}, 1000);

			var view2 = document.querySelector('#view-2');
				//console.log(view2);
				view2.style.right="0%";
			};


		// $scope.preventAddToCard = function(){
		// 	console.log($scope.totalSum);
		// 	//Prevent default 
		// 	if($scope.totalSum === 0) {
		// 		console.log('no products');
		// 		addToCart().preventDefault();
		// 	};

		// 	return preventAddToCard();
		// };

		/* AddToCart button animation - View 2 to View 3*/	
		$scope.addToCart = function(){

			//$scope.preventAddToCard();

			var view2 = document.querySelector('#view-2');
			var view3 = document.querySelector('#view-3');
			var bg = document.querySelector('#ecom-image');
			
			setTimeout(function(){ 
		 		bg.className = "ecom-bg-change-background";
			}, 100);
			
			view3.style.right="0%";
			
			setTimeout(function(){ 
				view2.style.right="-50%";
			}, 100);
					
		};

		/* Back Button - AddToCart View - View 4 to View 3 */
		/*************************************************/
		$scope.checkoutBack = function(){
			var view2 = document.querySelector('#view-2');
			var view3 = document.querySelector('#view-3');
			var view4 = document.querySelector('#view-4');
			var inputFields = document.getElementsByClassName('ecom-form-selector');
			console.log(inputFields);
			//inputFields.removeAttribute('required', 'required');
			//var bg = document.querySelector('#ecom-image');
			//bg.className = "ecom-bg-image";
			view2.style.left="50%";
			view3.style.right="0%";
			view3.style.opacity="1";
			view4.style.right="-100%";

		};

		/* Form Validation */
		$scope.addrValidation = function($event){
			var firstName = document.forms['payment-form']['first-name'].value;
			var lastName = document.forms['payment-form']['last-name'].value;
			var addr1 = document.forms['payment-form']['address-line-1'].value;
			var city = document.forms['payment-form']['city'].value;
			var zip = document.forms['payment-form']['zip'].value;
			var state = document.forms['payment-form']['state'].value;
			var email = document.forms['payment-form']['email'].value;
			var errorMsg = document.getElementById('errorMessage');
			var btn = document.getElementById('payment-animation-button');

			if(	firstName == null || lastName  ==  null || addr1 ==  null || city  ==  null || zip  ==  null || state  ==  null || state  ==  "State" || email  ==  null){
				$event.stopPropagation();
				errorMsg.className = 'fadeIn red';	
			};

		};

		/* Address Form - View 3 to View 4 */
		$scope.checkout = function(){
			var view2 = document.querySelector('#view-2');
			var view3 = document.querySelector('#view-3');
			var view4 = document.querySelector('#view-4');
			view2.style.left="100%";
			view3.style.right="-100%";
			view3.style.opacity="0";
			view4.style.right="0";
		};

		/* Back Button - Payment Form - View 5 to View 4 */
		/*************************************************/
		$scope.backToAddress = function(){
			/* Animation Variables */
			var view2 = document.querySelector('#view-2');
			var view4 = document.querySelector('#view-4');
			var view5 = document.querySelector('#view-5');

			view5.style.right="100%";
			view4.classList.toggle('hidden');
			view4.style.right="0";
			view4.style.opacity="1";
			// view4.style.opacity="1";
				
			// 	view2.classList.toggle('hidden');

			// 	setTimeout(function(){ 
			// 		view4.classList.toggle('hidden');
			// 		view5.style.right="1";
			// 		//view5.classList.toggle('hidden');
			// 	}, 100);
		};

		/* Payment Form - View 4 to View 5 */
		$scope.paymentInput = function(){
			/* Form Inputs */
			var firstName = document.forms['payment-form']['first-name'].value;
			var lastName = document.forms['payment-form']['last-name'].value;
			var addr1 = document.forms['payment-form']['address-line-1'].value;
			var city = document.forms['payment-form']['city'].value;
			var zip = document.forms['payment-form']['zip'].value;
			var state = document.forms['payment-form']['state'].value;
			var email = document.forms['payment-form']['email'].value;

			/* Error message */
			var errorMsg = document.getElementById('errorMessage');
			var btn = document.getElementById('payment-animation-button');
			var inputFields = document.getElementsByClassName('ecom-form-selector');
			
			/* Animation Variables */
			var view2 = document.querySelector('#view-2');
			var view4 = document.querySelector('#view-4');
			var view5 = document.querySelector('#view-5');

			if( firstName == null || lastName  ==  null || addr1 ==  null || city  ==  null || zip  ==  null || state  ==  null || email  ==  null || state  ==  "State"){
				errorMsg.className = 'fadeIn red';
			} else {
				view4.style.right="-100%";
				view4.style.opacity="0";
				
				view2.classList.toggle('hidden');

				setTimeout(function(){ 
					view4.classList.toggle('hidden');
					view5.style.right="0";
					//view5.classList.toggle('hidden');
				}, 100);
			}

		}

		/* Unide Error Message */
		$scope.paymentButtonClickedShowErrorMessage = function(){
			var btn = document.getElementById('submit-form');
			var errorMessage = document.getElementById('errorMessageStripePayment');
			btn.addEventListener('click', function(){
				//console.log('btn clicked');
				//console.log(errorMessage);
				errorMessage.className = 'payment-errors red';
			});
		};	
	};
	/* Load Template */
	return directive;
};