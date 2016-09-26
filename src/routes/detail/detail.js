angular
  .module('detail', [
    'ngRoute',
    'hero'
  ])
  .config(detailConfig)
  .controller('DetailController', DetailController);


function detailConfig($routeProvider) {
  $routeProvider
    .when('/detail/:id', {
      controller: DetailController,
      templateUrl: 'src/routes/detail/detail.tpl.html'
    });
}

function DetailController($scope, $routeParams, heroService, $location) {
  
  $scope.heroId = parseInt($routeParams.id);

  // get hero from service
  $scope.hero = {};

  heroService.get($scope.heroId).then(function(hero) {
    $scope.hero = hero;
  });

  $scope.gotoList = function() {
    $location.path('/list');
  }

}
