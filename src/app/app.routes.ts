import { Routes } from '@angular/router';
import { NotFoundPage } from '@core/pages/not-found-page/not-found-page';
import { TestPage } from '@core/pages/test-page/test-page';
import { LayoutAdmin } from '@layouts/layout-admin/layout-admin';
import { LayoutMobile } from '@layouts/layout-mobile/layout-mobile';
import { LayoutPublic } from '@layouts/layout-public/layout-public';

export const routes: Routes = [
  {
    path: '',
    component: LayoutPublic,
  },
  {
    path: 'mobile',
    component: LayoutMobile,
    loadChildren: () => import('@features/mobile/mobile.routes').then(m => m.MOBILE_ROUTES),
  },
  {
    path: 'admin',
    component: LayoutAdmin,
    children: [
      {
        path: 'categories',
        loadChildren: () => import('@features/categories/categories.routes').then(m => m.CATEGORY_ROUTES),
      },
      {
        path: 'test',
        component: TestPage
      },
    ],
  },
  {
    path: '**',
    component: NotFoundPage,
  }
];
