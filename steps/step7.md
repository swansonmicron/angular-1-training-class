# Angular Training Course - Zerrtech
-----

## Step 7: Filter List 

### New Files:
*None*

### Things to Do:
1. `src/common/heroList/heroList.js`
   * add `selectedSide` to `$scope` and set it to `null`
   * add options list to `$scope`
```
    $scope.options = [
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
   * add a `$scope.heroFilter` function which takes a hero and returns `true` if hero.light equals `$scope.selectedSide.value`. Also returns `true` if `$scope.selectedSide` is `null` 
2. `src/common/heroList/heroList.tpl.html`
   * add `select` element to template and use `ng-options` to populate
   * add `form-control` class to `select`
   * add a blank `option` element: `<option value=""><option>` inside the select element
   * add filter pipe in `ng-repeat` to use `heroFilter` function in controller [See Documentation](https://docs.angularjs.org/api/ng/filter/filter)
