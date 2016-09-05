angular
  .module('app', [
    'hero',
    'ngRoute',
    'list',
    'detail'
  ])
  .config(appConfig)
  .controller('AppController', AppController);

function appConfig($routeProvider) {
  $routeProvider
    .otherwise('/list');
}

function AppController($scope, heroService) {
  $scope.title = 'List Page';
  
  $scope.heroes = heroService.getAll();
}