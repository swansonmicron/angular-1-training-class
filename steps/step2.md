# Angular Training Course - Zerrtech
-----

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
   * Set `$scope.heroes = heroService.getAll()`
3. `src/routes/list/list.tpl.html`
   * Move list markup from `index.html` into `list.tpl.html`
4. `src/index.html`
   * Add a `<div ng-view></div>` which will be the location that route templates are shown

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
