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
        templateUrl: 'src/common/hero/heroListItem/heroListItem.tpl.html'
    };
}

function heroListItemController($scope) {

}