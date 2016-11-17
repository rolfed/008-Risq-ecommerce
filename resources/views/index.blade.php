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

        <!-- endbower -->

        <link rel="stylesheet" href="css/app.css">
	</head>
	<body ng-app="risqapp" id="top">
        <nav class="nav">
            <div class="container-fluid">
                <div class="risq-nav">
                    <div class="risq-brand">
                    <a href="/"><img src="img/risq-energy-logo.png" /></a>
                    <div class="risq-social-icons ssk-lg">
                        <h2><a href="https://www.instagram.com/risqenergy/">Drink it - Mix it - Share it</a></h2>
                        <a href="https://www.instagram.com/risqenergy/" class="ssk ssk-icon ssk-instagram" title="Instagram"></a>
                        <a href="https://www.facebook.com/risqenergy/" class="ssk ssk-icon ssk-facebook" title="Facebook"></a>
                        <a href="mailto:info@risqenergy.com?subject=Hello" class="ssk ssk-icon ssk-email" title="Email Risq"></a>
                    </div>
                </div>
            </div>
        </nav>

        <ng-view></ng-view>

        <footer class="footer-container">
          <div class="row">
              <div class="col-sm-12 text-center">
                <a href="#top" id="bottom"><span class="glyphicon glyphicon-menu-up" aria-hidden="true"></span></a>
              </div>
              <div class="col-sm-12 text-center social-icons">
                  <a href="https://www.instagram.com/risqenergy/" class="ssk ssk-icon ssk-instagram" title="Instagram"></a>
                  <a href="https://www.facebook.com/risqenergy/" class="ssk ssk-icon ssk-facebook" title="Facebook"></a>
                  <a href="mailto:info@risqenergy.com?subject=Hello" class="ssk ssk-icon ssk-email" title="Email Risq"></a>
              </div>
          </div>
        </footer>

	</body>

    <!-- Bower Dependencies -->
    <!-- bower:js -->

    <!-- endbower -->

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

</html>