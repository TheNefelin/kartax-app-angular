import { Component, input } from '@angular/core';
import { ProductItemComponent } from "@features/mobile/components/product-item-component/product-item-component";
import { GroupHierarchyModel } from '@features/mobile/models/group-hierarchy-model';

@Component({
  selector: 'app-product-group-component',
  imports: [
    ProductItemComponent
  ],
  templateUrl: './product-group-component.html',
})
export class ProductGroupComponent {
  readonly group = input.required<GroupHierarchyModel>();
}
