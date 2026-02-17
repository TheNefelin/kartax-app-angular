import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { CategoryModel } from '@features/categories/models/category-model';
import { CategoryRowComponent } from "@features/categories/components/category-row-component/category-row-component";

@Component({
  selector: 'app-category-list-component',
  imports: [
    CommonModule,
    CategoryRowComponent,
],
  templateUrl: './category-list-component.html',
})
export class CategoryListComponent {
  readonly categoryList = input.required<CategoryModel[]>();
}
