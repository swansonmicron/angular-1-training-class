angular
  .module('heroList', [
  ])
  .directive('heroList', heroList);

function heroList() {
    return {
        restrict: 'E',
        scope: {
            heroes: '=',
            onClickHero: '&'
        },
        controller: heroListController,
        templateUrl: 'src/common/hero/heroList/heroList.tpl.html'
    };
}

function heroListController($scope) {

    $scope.options = [
        {
            label: 'All',
            value: null
        },
        {
            label: 'Light',
            value: true
        },
        {
            label: 'Dark',
            value:  false
        }
    ];

    $scope.selectedSide = $scope.options[0];    

    $scope.heroFilter = function(hero) {
        if ($scope.selectedSide.value === null) {
            // if selectedSide is null, we should show all values
            return true;
        } else {
            return hero.light === $scope.selectedSide.value;
        }
    };
}