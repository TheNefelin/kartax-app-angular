import { Routes } from "@angular/router";
import { ProductFormPage } from "@features/products/pages/product-form-page/product-form-page";
import { ProductListPage } from "@features/products/pages/product-list-page/product-list-page";

export const PRODUCTS_ROUTES: Routes = [
  {
    path: '',
    component: ProductListPage,
  },
  {
    path: 'form',
    component: ProductFormPage,
  },
]
