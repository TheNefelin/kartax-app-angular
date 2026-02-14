import { Component, input } from '@angular/core';
import { GroupModel } from '@core/models/group-model';
import { ProductItemComponent } from "@features/mobile/components/product-item-component/product-item-component";

@Component({
  selector: 'app-product-group-component',
  imports: [
    ProductItemComponent
  ],
  templateUrl: './product-group-component.html',
})
export class ProductGroupComponent {
  readonly group = input.required<GroupModel>();
}
