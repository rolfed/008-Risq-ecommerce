app.directive('ordermobile', orderMobile);

function orderMobile(){
	var directive = {
		link: linkFunc,
		templateUrl: '../assets/views/_partials/order.html',
		scope: {
			csrfTokenMobile : '@',
			objTotal : '@'
		},
        restrict: 'E'
	}



	/* DOM Animation */
	function linkFunc($scope){
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

	}

	/* Load Directive */
	return directive;
}; 


