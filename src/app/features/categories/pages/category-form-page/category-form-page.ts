import { Component } from '@angular/core';
import { CategoryModel } from '@features/categories/models/category-model';

@Component({
  selector: 'app-category-form-page',
  imports: [],
  templateUrl: './category-form-page.html',
})
export class CategoryFormPage {
  private readonly initialCategory: CategoryModel | null = history.state.url;
}
