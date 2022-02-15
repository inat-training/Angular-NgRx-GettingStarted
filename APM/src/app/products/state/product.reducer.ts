import {
  createAction,
  createReducer,
  on
} from "@ngrx/store";

export const productReducer = createReducer(
  { showProductCode: true},
  on(createAction('[Product] Toggle product Code'), state => {
     return {
      ...state,
      showProductCode: !state.showProductCode
    }
  })
);
