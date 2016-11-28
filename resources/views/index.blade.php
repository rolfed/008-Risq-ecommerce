<!DOCTYPE html>
<!--[if lt IE 7]>      <html lang="en" ng-app="myApp" class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html lang="en" ng-app="myApp" class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html lang="en" ng-app="myApp" class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html lang="en"><!--<![endif]-->
	<head>
        <meta charset="utf-8">
        <meta http-equiv"X-UA-Compatible" content="IE=edge">
        <title>Risq Energy - Drink It - Mix It - Share It</title>
        <meta name="description" content="Risq Energy - Drink It - Mix It - Share It. Follow Risq on Instagram @risqenergy and Facebook www.facebook.com/risqenergy. Contact Risq at info@risqeneryg.">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- bower:css -->
        <link rel="stylesheet" href="{{ asset('/bower_components/social-share-kit/dist/css/social-share-kit.css') }}" />
        <!-- endbower -->

        <link rel="stylesheet" href="{{ asset('assets/css/app.css') }}">
	</head>
	<body ng-app="risq" id="top">
        <ng-view ng-controller="MainCtrl as main">

        </ng-view>

        <!-- bower:js -->
        <script src="{{ asset('/bower_components/jquery/dist/jquery.js') }}"></script>
        <script src="{{ asset('/bower_components/angular/angular.js') }}"></script>
        <script src="{{ asset('/bower_components/angular-route/angular-route.js') }}"></script>
        <script src="{{ asset('/bower_components/bootstrap/dist/js/bootstrap.js') }}"></script>
        <script src="{{ asset('/bower_components/social-share-kit/dist/js/social-share-kit.min.js') }}"></script>
        <!-- endbower -->

        <!-- App JS -->
        <script src="{{ asset('assets/js/app.js') }}"></script>

        <!-- Adobe Typekit -->
        <script src="https://use.typekit.net/ols4gou.js"></script>
        <script>try{Typekit.load({ async: true });}catch(e){}</script>

        <!-- Google Analytics -->
        <script>
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-87594064-1', 'auto');
          ga('send', 'pageview');

        </script>
	</body>

</html>
