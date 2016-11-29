/** Routes **/
app.config(['$routeProvider', function($routeProvider) {

  $routeProvider
  // Home
  .when('/', {
    templateUrl: '../assets/views/homePage.html',
    controller: 'GlobalCtrl',
    controllerAs: 'vm'
  })

  // 404
  .otherwise('/404', {
    templateUrl: '../assets/views/404.html',
    controller: 'GlobalCtrl',
  })

}]);