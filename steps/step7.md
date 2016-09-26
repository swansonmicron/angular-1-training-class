# Angular Training Course - Zerrtech
-----

## Step 7: Filter List 

### New Files:
*None*

### Things to Do:
1. `src/common/heroList/heroList.js`
   * add options list to `$scope`
```
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
```
   * add `selectedSide` to `$scope` and we want to initialize it to the "All" option, so set it to `$scope.options[0]`
   * add a `$scope.heroFilter` function which takes a hero and returns `true` if hero.light equals `$scope.selectedSide.value`. Also returns `true` if `$scope.selectedSide.value` is `null` 
2. `src/common/heroList/heroList.tpl.html`
   * add `select` element to template and use `ng-options` to populate
   * add `form-control` class to `select`
   * add filter pipe in `ng-repeat` to use `heroFilter` function in controller [See Documentation on $filter](https://docs.angularjs.org/api/ng/filter/filter)
   * add an additional filter pipe to do sorting with the `orderBy` parameter. To sort the list by the power descending, use `orderBy:'-power'` [See Documentation on orderBy](https://docs.angularjs.org/api/ng/filter/orderBy)
