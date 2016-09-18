# Angular Training Course - Zerrtech
-----

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
