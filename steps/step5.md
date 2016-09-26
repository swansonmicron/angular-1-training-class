# Angular Training Course - Zerrtech
-----

## Step 5: $http 

### New Files:
   * `data/heroes.json`

### Things to Do:
1. `src/common/hero/heroService.js`
   * inject `$http` into `heroService`
   * replace hardcoded `heroes` list with empty array `[]`
   * in `getAll()`:
   * check if the heroes exist
   * if they do not exist, get them with `$http.get('data/heroes.json').then(function(res) {...})`
   * the heroes will be in the `data` property of the response. i.e. `heroes = res.data`
   * if they do exist, return them in a promise with `return $q.when(heroes)`
   * in `get(id)`:
   * instead of using the global `heroes` object to filter through, use the `getAll` function to get the heroes first. This will ensure that if you load the details page first, it will fetch them from the `data/heroes.json` file
2. `src/routes/list/list.js`
   * set initial `heroes` list to an empty array ` $scope.heroes = []`
   * use `heroService.getAll()` to retrieve the heroes and set `$scope.heroes` with the response in the promise callback function
3. `src/routes/detail/detail.js`
   * set initial `hero` object to an empty object `$scope.hero = {}`
   * use `heroService.get()` to retrieve the hero and set `$scope.hero` with the response in the promise callback function