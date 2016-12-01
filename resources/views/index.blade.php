<!DOCTYPE html>
<!--[if lt IE 7]>      <html lang="en" ng-app="myApp" class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html lang="en" ng-app="myApp" class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html lang="en" ng-app="myApp" class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html lang="en" ng-app="risq"><!--<![endif]-->
	<head>
        <meta charset="utf-8">
        <meta http-equiv"X-UA-Compatible" content="IE=edge">
        <title>Risq Energy - Drink It - Mix It - Share It</title>
        <meta name="description" content="Risq Energy - Drink It - Mix It - Share It. Follow Risq on Instagram @risqenergy and Facebook www.facebook.com/risqenergy. Contact Risq at info@risqeneryg.">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- bower:css -->
        <link rel="stylesheet" href="{{ asset('/bower_components/social-share-kit/dist/css/social-share-kit.css') }}" />
        <!-- endbower -->

        <!-- Main CSS -->
        <link rel="stylesheet" href="{{ asset('assets/css/app.css') }}">
	</head>
	<body ng-contoller="GlobalCtrl as global" id="top">
        <div class="container">
            
            <navigation></navigation>

            <div class="space-lg"></div>

            <recipe></recipe>

            <div class="space-lg"></div>

            <instagram></instagram>

            <div class="space-lg"></div> 

            <ecom></ecom>

            
            <uimap></uimap>

            <div class="space-lg"></div> 

            <address></address>

            <div class="space-lg"></div>

            <ftr></ftr>

        </div>

        <!-- bower:js -->
        <script src='{{ asset('/bower_components/jquery/dist/jquery.js') }}'></script>
        <script src='{{ asset('/bower_components/angular/angular.js') }}'></script>
        <script src='{{ asset('/bower_components/angular-route/angular-route.js') }}'></script>
        <script src='{{ asset('/bower_components/social-share-kit/dist/js/social-share-kit.min.js') }}'></script>
        <script src='{{ asset('/bower_components/bootstrap-sass/assets/javascripts/bootstrap.js') }}'></script>
        <script src='{{ asset('/bower_components/angular-simple-logger/dist/angular-simple-logger.js') }}'></script>
        <script src='{{ asset('/bower_components/lodash/lodash.js') }}'></script>
        <script src='{{ asset('/bower_components/markerclustererplus/src/markerclusterer.js') }}'></script>
        <script src='{{ asset('/bower_components/google-maps-utility-library-v3-markerwithlabel/dist/markerwithlabel.js') }}'></script>
        <script src='{{ asset('/bower_components/google-maps-utility-library-v3-infobox/dist/infobox.js') }}'></script>
        <script src='{{ asset('/bower_components/google-maps-utility-library-v3-keydragzoom/dist/keydragzoom.js') }}'></script>
        <script src='{{ asset('/bower_components/js-rich-marker/src/richmarker.js') }}'></script>
        <script src='{{ asset('/bower_components/angular-google-maps/dist/angular-google-maps.js') }}'></script>
        <!-- endbower -->
        <script src='{{ asset('/bower_components/instafeed/instafeed.js') }}'></script>
        
        <!-- App JS -->
        <script src="{{ asset('assets/js/app.js') }}"></script>

        <!-- Include Stripe -->
        <script type="text/javascript" src="https://js.stripe.com/v2/"></script>

        <script type="text/javascript">
            // This identifies your website in the createToken call below
            Stripe.setPublishableKey('{!! env('STRIPE_PK') !!}');

            $(function($) {

                // Diable the submit button to prevent repeated clicks
                $('#payment-form').submit(function(event) {
                    formInstance.submitEvent.preventDefault();
                    return false;

                    Stripe.card.createToken($form, stripeResponseHandler);

                    // Prevent the form from submitting with the default action
                    return false;
                });
            });

            function stripeResponseHandler(status, response) {
                var $form = $('#payment-form');

                if(response.error) {
                    // Show the errors on the form
                    $form.find('.payment-errors').text(response.error.message);
                    $form.find('.payment-errors').addClass('alert alert-danger');
                    $form.find('#submitBtn').button('reset');
                } else {
                    // Response contains id and card, which contains additional card details
                    var token = response.id;
                    // Insert the token into the form so it gets submitted to the server
                    $form.append($('<input type="hidden" name="stripeToken" />').val(token));
                    // and submit
                    $form.get(0).submit();
                }
            };
        </script>




        <!-- Adobe Typekit -->
        <script type='text/javascript' src="https://use.typekit.net/ols4gou.js"></script>
        <script type='text/javascript' >try{Typekit.load({ async: true });}catch(e){}</script>
        
        <!-- Instafeed -->
          
        <script type='text/javascript'>

            var feed = new Instafeed({
                get: 'user',
                userId: '3852337515',
                template: '<div class="col-sm-3"><a href="@{{link}}"><img src="@{{image}}" class="" /></a></div>',
                clientId: 'e673a9025c6f4653978f207207a55c17',
                accessToken: '3852337515.1677ed0.9a45801ee7664720843f68e8e380e994',
                resolution: 'standard_resolution',
                limit: 8
            });




            feed.run();
        </script>

        <!-- Google Analytics -->
        <script type='text/javascript'>
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-87594064-1', 'auto');
          ga('send', 'pageview');

        </script>
	</body>

</html>
