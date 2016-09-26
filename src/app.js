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
  $routeProvider
    .otherwise('/');
}

function AppController($scope) {
}