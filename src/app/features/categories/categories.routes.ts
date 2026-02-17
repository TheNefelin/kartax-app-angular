import { Routes } from "@angular/router";
import { CategoryFormPage } from "@features/categories/pages/category-form-page/category-form-page";
import { CategoryListPage } from "@features/categories/pages/category-list-page/category-list-page";

export const CATEGORY_ROUTES: Routes = [
  {
    path: '',
    component: CategoryListPage,
  },
  {
    path: 'form',
    component: CategoryFormPage,
  },
]
