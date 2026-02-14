import { Component, input } from '@angular/core';
import { ProductModel } from '@core/models/product-model';
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-product-item-component',
  imports: [NgOptimizedImage],
  templateUrl: './product-item-component.html',
})
export class ProductItemComponent {
  readonly product = input.required<ProductModel>();
}
