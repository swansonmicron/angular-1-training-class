angular
  .module('app', [
      'hero',
      'ngRoute'
    ]
  )
  .config(appConfig)
  .controller('appController', AppController);

function appConfig($routeProvider) {
  $routeProvider.otherwise({
    redirectTo: '/'
  });
}

function AppController($scope, heroService) {
  $scope.title = 'List Page';
  
  $scope.heroes = heroService.getAll();
}