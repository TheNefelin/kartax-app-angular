import { Routes } from "@angular/router";
import { ProductsPage } from "@features/mobile/pages/products-page/products-page";
import { OrderPage } from "@features/mobile/pages/order-page/order-page";

export const  MOBILE_ROUTES: Routes = [
  {
    path: '',
    component: ProductsPage
  },
  {
    path: 'order',
    component: OrderPage
  }
]