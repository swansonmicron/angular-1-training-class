angular
  .module('app', [
    'hero',
    'ngRoute',
    'list',
    'detail'
  ])
  .config(appConfig)
  .controller('AppController', AppController);

function appConfig($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .otherwise('/');
}

function AppController($scope, heroService) {

}