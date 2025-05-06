import { createReducer, on } from '@ngrx/store';
import { Product } from './product.model';
import { loadProducts, loadProductsFailure, loadProductsSuccess } from './product.action';

export interface ProductState {
  products: Product[];
  error: string | null;
  loading: boolean;
}

export const inititalState: ProductState = {
  products: [],
  error: null,
  loading: false,
};


export const productReducer = createReducer(inititalState,
    on(loadProducts,(state)=>({...state,loading:true,})),
    on(loadProductsSuccess,(state,{products})=>({...state,products: products,loading:false})),
    on(loadProductsFailure,(state,{error})=>({...state,loading:false,error})),
)