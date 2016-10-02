angular
  .module('list', [
    'ngRoute',
    'hero',
    'squad'
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

function ListController($scope, heroService, squadService, $location) {
  
  $scope.title = 'List Page';
  $scope.heroes = [];
  $scope.squadHeroes = squadService.getAll();

  heroService.getAll().then(function(heroes) {
    $scope.heroes = heroes;
  });

  $scope.gotoDetail = function(hero) {
    $location.path('detail/' + hero.id);
  };

  $scope.addHeroToSquad = function(hero) {
    squadService.addHero(hero);
  };

}

