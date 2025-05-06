import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../store/product/product.model';
import { Store } from '@ngrx/store';
import { selectAllProducts } from '../../store/product/product.selectors';
import { loadProducts } from '../../store/product/product.action';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  products!: Observable<Product[]>;
  constructor(private store: Store) {
    this.products = this.store.select(selectAllProducts);
  }

  ngOnInit() {
    this.store.dispatch(loadProducts());
  }
}
