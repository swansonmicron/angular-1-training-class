angular
  .module('app', ['hero'])
  .controller('AppController', AppController);


function AppController($scope, heroService ) {

  $scope.title = 'List Page';
  
  $scope.heroes = heroService.getAll();
}