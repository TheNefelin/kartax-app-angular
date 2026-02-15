import { Component, input } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { ProductModel } from '@features/products/models/product-model';

@Component({
  selector: 'app-product-item-component',
  imports: [NgOptimizedImage],
  templateUrl: './product-item-component.html',
})
export class ProductItemComponent {
  readonly product = input.required<ProductModel>();
}
