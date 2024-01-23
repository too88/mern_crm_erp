import { createSelector } from "reselect";

const selectCrud = (state) => state.crud;

export const selectCreatedItem = createSelector([selectCrud], (crud) => crud.create);
export const selectListItems = createSelector([selectCrud], (crud) => crud.list);
export const selectCurrentItem = createSelector([selectCrud], (crud) => crud.current);
export const selectUpdatedItem = createSelector([selectCrud], (crud) => crud.update);
