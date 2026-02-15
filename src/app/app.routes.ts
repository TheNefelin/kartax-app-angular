import { Routes } from '@angular/router';
import { LayoutMobile } from '@layouts/layout-mobile/layout-mobile';
import { LayoutPublic } from '@layouts/layout-public/layout-public';

export const routes: Routes = [
  {
    path: '',
    component: LayoutMobile,
    loadChildren: () => import('@features/mobile/mobile.routes').then(m => m.MOBILE_ROUTES),
  },
  {
    path: 'public',
    component: LayoutPublic,
  },
];
