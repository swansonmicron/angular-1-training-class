angular.module('app', [])

.controller('appController', function($scope) {

  $scope.title = 'List Page';
  
  $scope.heroes = [
    {
      id: 0,
      name: 'Luke Skywalker',
      power: 9000,
      affiliations: ['Jedi', 'Rebels'],
      light: true
    },
  ]
})

;