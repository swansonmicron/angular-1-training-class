angular
  .module('heroListItem', [
  ])
  .directive('heroListItem', heroListItem);

function heroListItem() {
    return {
        restrict: 'E',
        scope: {
            hero: '=',
            onClickHero: '&'
        },
        controller: heroListItemController,
        controllerAs: 'hero',
        templateUrl: 'src/common/hero/heroList/heroListItem.tpl.html'
    };
}

function heroListItemController($scope) {

}