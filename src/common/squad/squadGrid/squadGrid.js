angular.module('squadGrid', [])
.directive('squadGrid', squadGrid);

function squadGrid() {
    return {
        scope: {
            heroes: '=',
            onClickHero: '&'
        },
        controller: squadGridController,
        templateUrl: 'src/common/squad/squadGrid/squadGrid.tpl.html'
    };
}

function squadGridController($scope) {

}