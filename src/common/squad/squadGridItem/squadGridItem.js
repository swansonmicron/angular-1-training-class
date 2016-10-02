angular.module('squadGridItem', ['squadService'])
.controller('squadGridItemController', squadGridItemController)
.directive('squadGridItem', squadGridItem);

function squadGridItemController($scope, squadService) {
    // when a hero is removed from squad, call squadService.removeHero(hero)
    $scope.removeHeroFromSquad = function(hero) {
        squadService.removeHero(hero);
    };

    $scope.onClick = function(hero) {
        $scope.onClickHero({ hero: hero });
    };
}

function squadGridItem() {
    return {
        scope: {
            hero: '=',
            onClickHero: '&'
        },
        controller: 'squadGridItemController',
        templateUrl: 'src/common/squad/squadGridItem/squadGridItem.tpl.html'
    };
}

