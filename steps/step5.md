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
   * if they do not exist, get them with `$http.get('data/heroes.json').then(...)`
   * if they do exist, return them in a promise with `return $q.when(heroes)`
   * in `get(id)`:
   * instead of using the global `heroes` object to filter through, use the `getAll` function to get the heroes first. This will ensure that if you load the details page first, it will fetch them from the `data/heroes.json` file
2. `src/routes/list/list.js`