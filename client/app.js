angular.module('rocketreach-app', [
  'rocketreach-app.services',
  'rocketreach-app.directives',
  'rocketreach-app.home',
  'ngRoute'
])
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: './controllers/home/home.html',
    controller: 'HomeController'
  })
  .otherwise({
    redirectTo: '/'
  });
});
