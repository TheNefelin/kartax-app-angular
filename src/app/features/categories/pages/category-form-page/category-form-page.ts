import { Component, signal } from '@angular/core';
import { CategoryModel } from '@features/categories/models/category-model';
import { CategoryFormComponent } from "@features/categories/components/category-form-component/category-form-component";
import { JsonPipe } from '@angular/common';
import { RouterLink } from "@angular/router";
import { ROUTES_CONSTANT } from '@shared/constants/routes-constant';

@Component({
  selector: 'app-category-form-page',
  imports: [
    JsonPipe,
    CategoryFormComponent,
    RouterLink
],
  templateUrl: './category-form-page.html',
})
export class CategoryFormPage {
  private readonly initialCategory: CategoryModel | null = history.state.category || null;
  readonly category = signal<CategoryModel | null>(this.initialCategory);

  ROUTES_CONSTANT=ROUTES_CONSTANT;
}
