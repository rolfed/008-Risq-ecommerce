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

        <!-- bower:css -->
        <link rel="stylesheet" href="{{ asset('/bower_components/social-share-kit/dist/css/social-share-kit.css') }}" />
        <!-- endbower -->
        <script src='{{ asset('/bower_components/instafeed/instafeed.js') }}'></script>
        
        <!-- App JS -->
        <script src="{{ asset('assets/js/app.js') }}"></script>
        
        <!-- endbower -->

        <!-- Main CSS -->
        <link rel="stylesheet" href="{{ asset('assets/css/app.css') }}">
	</head>
	<body ng-contoller="GlobalCtrl as global" id="top">
        <div class="container">
            
            <navigation></navigation>
            
            <!-- <ng-view></ng-view> -->

            <div class="space-lg"></div>
            <h1 class="test"></h1>
            <recipe></recipe>

            <div class="space-lg"></div>

            <instagram class="hidden-xs"></instagram>

            <div class="space-lg"></div> 

            <ecom data-csrf-token="{{ csrf_token() }}"></ecom>

            <div class="space-lg"></div>
            
            <uimap></uimap>

            <div class="space-lg"></div> 

            <address class="hidden-xs"></address>

            <div class="space-lg"></div>

            <ftr></ftr>
        </div>

        
        
        
        
        <script type="text/javascript">
            // This identifies your website in the createToken call below
            //Stripe.setPublishableKey('{{ env('STRIPE_PK') }}');
        </script>

        <script type="text/javascript">
              app.constant("CSRF_TOKEN", '{{ csrf_token() }}')
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
