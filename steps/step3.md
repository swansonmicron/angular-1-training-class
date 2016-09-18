# Angular Training Course - Zerrtech
-----

## Step 3: Change list and detail pages to use directives

### New Files:
1. `src/hero/hero.js`
2. `src/hero/heroService.js`
3. `src/hero/heroList/heroList.js`
4. `src/hero/heroList/heroList.tpl.html`
5. `src/hero/heroList/heroList.css`
6. `src/hero/heroListItem/heroListItem.js`
7. `src/hero/heroListItem/heroListItem.tpl.html`
8. `src/hero/heroListItem/heroListItem.css`
9. `src/hero/heroDetail/heroDetail.js`
10. `src/hero/heroDetail/heroDetail.tpl.html`
11. `src/hero/heroDetail/heroDetail.css`


### Things to Do:
1. `src/common/hero/`
   * We will make a `src/common/hero` directory to contain all hero-related items
2. `src/common/hero/` create directories `heroList`, `heroListItem`, `heroDetail`
   * All 3 of these directories will be added to contain a directive
   * Each directory will have a js file, template file, and css file
   * `src/common/hero/heroList` contains `heroList.js`, `heroList.tpl.html`, `heroList.css`
   * `src/common/hero/heroListItem` contains `heroListItem.js`, `heroListItem.tpl.html`, `heroListItem.css`
   * `src/common/hero/heroDetail` contains `heroDetail.js`, `heroDetail.tpl.html`, `heroDetail.css`      
   * `src/common/hero/heroList/heroList.js` will be a module `heroList` that
     has a directive `heroList`.
   * `src/common/hero/heroListItem/heroListItem.js` will be a module `heroListItem` that
     has a directive `heroListItem`.
   * `src/common/hero/heroDetail/heroDetail.js` will be a module `heroDetail` that
     has a directive `heroDetail`.     
3. `src/common/hero/` let's add a hero.js file that is the module to use to get all hero features
   * Move `src/common/hero.js` to `src/common/hero/hero.js`
   * We will pull out the `heroService` from that file and put in a new file
     `src/common/hero/heroService.js`, which will also be a standalone module `heroService`
     that is the same name as the service.
4. Create the full `hero` module in `src/common/hero/hero.js`
   * Add all new modules as a dependency of the `hero` module
   * `heroService, `heroList`, `heroListItem`, `heroDetail` 
5. Build out the `heroList` directive from the `ListController` template
   * pull out template in `src/routes/list/list.tpl.html` and put in the `heroList` template
     at `src/common/hero/heroList/heroList.tpl.html`
   * All the template at `src/routes/list/list.tpl.html` should have now is to include
     the `<hero-list heroes="heroes" on-click-hero="gotoDetail({ hero: hero})">` directive and pass `heroes` into it and `onClickHero` function as output.
   * Create this `gotoDetail(heroData)` function on the `ListController`
6. Build out the `heroListItem` directive from the `heroList` template
   * pull out the part of the template repeated for each `hero` in `src/common/hero/heroList/heroList.tpl.html`
     and put into the `heroListItem` template at `src/common/hero/heroListItem/heroListItem.tpl.html`
   * Call this new directive from the `heroList` template at `src/common/hero/heroList/heroList.tpl.html`
     by adding a `<hero-list-item hero="hero" on-click-hero="onClickHero({ hero: hero })">`
7. Build out the `heroDetail` directive from the `DetailController` template
   * pull out template in `src/routes/detail/detail.tpl.html` and put into `heroDetail` template
     at `src/common/hero/heroDetail/heroDetail.tpl.html`
   * change the `DetailController` template to only contain `<hero-detail hero="hero" onClose="gotoList()">`
   * create that `gotoList()` function on the `DetailController`