import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductService } from "../../components/product.service";
import { catchError, map, of, switchMap } from "rxjs";
import { loadProducts, loadProductsFailure, loadProductsSuccess } from "./product.action";

@Injectable()
export class ProductEffects{
    products$;
    constructor(private actions$:Actions,private productService:ProductService){
    this.products$ = createEffect(()=>
    this.actions$.pipe(
        ofType(loadProducts),
        switchMap(()=>this.productService.getProducts().pipe(
            map((products)=>loadProductsSuccess({products})),
            catchError((error)=> of(loadProductsFailure({error:'Failed to load products'})) )
        ))
    ))
    }
}