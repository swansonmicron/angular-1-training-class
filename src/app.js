angular
  .module('app', ['hero'])
  .controller('appController', appController);


function appController($scope, heroService) {
  $scope.title = 'List Page';
  
  $scope.heroes = heroService.getAll();
}