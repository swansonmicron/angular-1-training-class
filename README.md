# Angular Training Course - Zerrtech
-----

## Step 0: First Controller/View

### New Files:
1. `src/app.js`
   * App entry point
2. `index.html`
   * Main HTML file with imports and view entry point

### Things to Do:
1. `src/app.js`
   * Add new heroes to the list
2. `index.html`
   * Use `ng-repeat` to iterate over heroes list
   * Use `list-group`, `list-group-item` bootstrap classes for `ul` and `li`
   * Use `row` and `col-xs-6` bootstrap classes for hero item sections
   * Use `ng-repeat` to iterate over `hero.affiliations`
---------------------------

## Step 1: Add Heroes Service

### New Files:
1. `src/common/hero.js`

### Things to Do:
1. `src/app.js`
   * List `hero` as a dependency
   * Inject `heroService` into `AppController`
   * Use `heroService.getAll()` to get heroes list instead of hardcoding them
2. `src/common/hero.js`
   * Add a `heroes` variable (move the `heroes` list from `app.js` into a local `var`)
   * Return the `heroes` list in the `getAll` function
3. `index.html`
   * *Nothing*
---------------------------


## Step 2: Add New Route and Click Handler

### New Files:
1. `src/routes/detail/detail.js`
2. `src/routes/detail/detail.tpl.html`
3. `src/routes/list/list.js`
4. `src/routes/list/list.tpl.html`

### Things to Do:
1. `src/app.js`
   * List `list` and `detail` as dependencies
   * Inject `$locationProvider` into `appConfig`
   * Call `$locationProvider.html5Mode(true)` in `appConfig`
   * Set default route with `$routeProvider.otherwise('/')`
2. `src/routes/list/list.js`
   * Use `$routeProvider.when('/', { ... })` to set '/' route to use `ListController` and `src/routes/list/list.tpl.html`. [See official docs](https://docs.angularjs.org/api/ngRoute/provider/$routeProvider#when)   
   * List `hero` as a dependency
   * Inject `$scope` and `heroService` into `ListController`
   * Set `$scope.hero = heroService.getAll()`
3. `src/routes/list/list.tpl.html`
   * Move list markup from `index.html` into `list.tpl.html`

### Check that ListController works at '/' route before continuing 
4. `src/routes/detail/detail.js`
   * Use `$routeProvider.when('/detail/:id', { ... })` to set route to use `DetailController` and `src/routes/detail/detail.tpl.html`. [See official docs](https://docs.angularjs.org/api/ngRoute/provider/$routeProvider#when)   
   * List `hero` as a dependency
   * Inject `$scope`, `$routeParams`, and `heroService` into `DetailController`
   * Set `$scope.heroId = parseInt($routeParams.id)`
   * Set `$scope.hero = heroService.get($scope.heroId)`
5. `src/routes/detail/detail.tpl.html`
   * Use `row` and `col-xs-6` classes to display `hero` properties
   * Use an `<a href="/">X</a>` tag to link back to list page  
   * Use `ng-repeat` to iterate over `hero.affiliations`