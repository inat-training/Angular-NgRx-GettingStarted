import {createAction, props} from "@ngrx/store";
import { Product } from "../product";

export const toggleProductCode = createAction('[Product] Toggle Product Code');
export const setCurrentProduct = createAction('[Product] Set Current Product', props<{product: Product}>());
export const clearCurrentProduct = createAction('[Product] Creal Current Product');
export const initCurrentProduct = createAction('[Product] init Current Product');

export const loadProducts = createAction('[Product] Load');
export const loadProductsSuccess = createAction('[Product] Load Success', props<{products: Product[]}>())
export const loadProductsFailure = createAction('[Product] Load Failure', props<{error: String}>())