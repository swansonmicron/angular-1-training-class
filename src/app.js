angular
  .module('app', [])
  .controller('AppController', AppController);

function AppController($scope) {

  $scope.title = 'List Page';
  
  $scope.heroes = [
    {
      id: 0,
      name: 'Luke Skywalker',
      imageUrl: 'images/luke.png',
      power: 9000,
      affiliations: ['Jedi', 'Rebels'],
      light: true
    },
  ]
}