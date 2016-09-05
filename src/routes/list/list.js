angular
  .module('list', [
    'ngRoute'
  ])
  .config(listConfig)
  .controller('ListController', ListController);

function listConfig($routeProvider) {
  $routeProvider
    .when('/list', {
      controller: ListController,
      templateUrl: 'src/routes/list/list.tpl.html'
    });
}

function ListController() {
  console.log('controller');
}

