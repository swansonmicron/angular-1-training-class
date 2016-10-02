# Angular Training Course - Zerrtech
-----

## Step 8: 

### New Files:
* `src/common/squad/squad.js`
* `src/common/squad/squadService.js`
* `src/common/squad/squadGrid/squadGrid.js`
* `src/common/squad/squadGrid/squadGrid.tpl.html`
* `src/common/squad/squadGrid/squadGrid.css`
* `src/common/squad/squadGridItem/squadGridItem.js`
* `src/common/squad/squadGridItem/squadGridItem.tpl.html`
* `src/common/squad/squadGridItem/squadGridItem.css`

### Things to Do:
1. `src/common/squad/squadService.js`
   * Review functions, they have been built already:
     * getAll()
     * clearAll()
     * addHero(hero)
     * removeHero(hero)
     * get/setMaxHeroes(numHeroes)
     * isFull()

2. `src/common/squad/squadGridItem/*`
   * create a squadGridItem directive that has an input of `hero` and an `onClickHero` function output
   * when squad member clicked, call the `$scope.onClickHero(hero)` directive function with the clicked hero as argument
     remember that when we call an isolate scope function that has an argument, we need to call it like `$scope.onClickHero({ hero: hero })`
   * when squad member removed, call the `squadService.removeHero(hero)` function with the removed hero as argument

3. `src/common/squad/squadGrid/*`
   * create a squadGrid directive that has an input of `heroes` and an `onClickHero` function output
   * within the template, we will do an `ng-repeat` over heroes and pass each into directive `squad-grid-item` and pass in each hero and a click handler function using `on-click-hero` attribute
   * to create the grid effect, if we consider that we just want to display 2 columns, we can put every `squad-grid-item` in a container that has 6 grid units
   * when the function you passed into `on-click-hero` is called, we just pass it up the chain, calling our own `$scope.onClickHero({ hero: hero })`
   * display a little note to the user when there are no heroes in the squad by using an `ng-if` directive to show some HTML when `$scope.heroes.length === 0`

4. `src/common/squad/squad.js`
   * this is where we include the module from each sub-feature, `squadService`, `squadGrid`, and `squadGridItem`, all in a module named `squad`

5. `src/routes/list/*`
   * We need to add in this new `squadGrid` directive alongside the `heroList` directive in the `list` route
   * Import the `squad` module to get the new directive and service
   * Give the `heroList` half the page (6 grid units) and the `squadGrid` the other half.
   * Change the `heroList` `on-click-hero` attribute a different function that instead of showing hero detail, adds hero to squad

6. `index.html`
   * Add our new files and CSS