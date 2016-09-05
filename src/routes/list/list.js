angular
  .module('list', [
    'ngRoute',
    'hero'
  ])
  .config(listConfig)
  .controller('ListController', ListController);

function listConfig($routeProvider) {
  $routeProvider
    .when('/', {
      controller: ListController,
      templateUrl: 'src/routes/list/list.tpl.html'
    });
}

function ListController($scope, heroService) {
  
  $scope.title = 'List Page';

  $scope.heroes = heroService.getAll();
  
}

