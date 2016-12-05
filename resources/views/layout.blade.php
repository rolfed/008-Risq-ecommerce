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

        <!-- CSRF Token -->
        <meta content="ie=edge" http-equiv="x-ua-compatible">
            <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
            <meta name="csrf-token" content="{{ csrf_token() }}">
        </meta>

        <!-- Main CSS -->
        <link rel="stylesheet" href="{{ asset('assets/css/app.css') }}">
	</head>
	<body ng-contoller="GlobalCtrl as global" id="top">
        <div class="container">
        
        @yield('content')

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
        <script src='{{ asset('/bower_components/angular-stripe/release/angular-stripe.js') }}'></script>
        <!-- endbower -->
        <script src='{{ asset('/bower_components/instafeed/instafeed.js') }}'></script>

        <!-- Adobe Typekit -->
        <script type='text/javascript' src="https://use.typekit.net/ols4gou.js"></script>
        <script type='text/javascript' >try{Typekit.load({ async: true });}catch(e){}</script>
        
        <!-- App JS -->
        <script src="{{ asset('assets/js/app.js') }}"></script>

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