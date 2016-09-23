# Angular Training Course - Zerrtech
-----

## Step 4: ngClass and ngFilter

### New Files:
*None*

### Things to Do:
1. `src/common/hero/heroListItem/heroListItem.tpl.html`
   * add `ng-class` to `li` component
   * use class names `list-item-light` and `list-item-dark`
   * remove `hero.light` element
   * change `hero-detail-container` FROM `col-xs-6` TO `col-xs-5`
   * add a new `<div class="col-xs-1">...</div>` to the row
   * inside the new row add `<span class="glyphicon glyphicon-chevron-right"></span>`
2. `src/common/hero/heroListItem/heroListItem.css`
   * add `border-left-color`, `border-left-style: solid`, and `border-left-width`  
  ```
  .list-item-(light/dark) {
    border-left-color: (blue/red);
    border-left-style: solid;
    border-left-width: 30px;
  }
  ```
3. `src/common/hero/heroDetail/heroDetail.tpl.html`
   * Change the remove `X` to a `<span class="glyphicon glyphicon-remove"><span>`
