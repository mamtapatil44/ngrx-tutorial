import { Injectable } from '@angular/core';
import { Product } from '../store/product/product.model';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getProducts(): Observable<Product[]> {
    const products: Product[] = [
      { id: '1', name: 'Laptop', price: 1200 },
      { id: '2', name: 'Phone', price: 800 },
    ];
    return of(products).pipe(delay(1000)); 
  }
}
