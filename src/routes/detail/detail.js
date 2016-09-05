angular
  .module('detail', [
    'ngRoute'
  ])
  .config(detailConfig)
  .controller('DetailController', DetailController);


function detailConfig($routeProvider) {
  $routeProvider
    .when('/detail', {
      controller: DetailController,
      templateUrl: 'src/routes/detail/detail.tpl.html'
    });
}

function DetailController() {

}
