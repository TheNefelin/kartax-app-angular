import { Routes } from '@angular/router';
import { MobileLayout } from '@layouts/mobile-layout/mobile-layout';
import { PublicLayout } from '@layouts/public-layout/public-layout';

export const routes: Routes = [
  {
    path: '',
    component: MobileLayout,
    loadChildren: () => import('@features/mobile/mobile.routes').then(m => m.MOBILE_ROUTES),
  },
  {
    path: 'public',
    component: PublicLayout,
  },
];
