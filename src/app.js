angular
  .module('app', [
    'hero',
    'ngRoute'
  ])
  .config(appConfig)
  .controller('AppController', AppController);

function appConfig($routeProvider) {

}

function AppController($scope, heroService) {
  $scope.title = 'List Page';
  
  $scope.heroes = heroService.getAll();
}