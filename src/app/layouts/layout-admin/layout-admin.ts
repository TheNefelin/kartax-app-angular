import { Component } from '@angular/core';
import { DashboardComponent } from '@features/dashboard/components/dashboard-component/dashboard-component';
import { LAYOUT_DASHBOARD_ADMIN_NAVIGATION } from '@shared/constants/layout-dashboard-admin-routes';

@Component({
  selector: 'app-layout-admin',
  imports: [
    DashboardComponent
  ],
  templateUrl: './layout-admin.html',
})
export class LayoutAdmin {
  LAYOUT_DASHBOARD_ADMIN_NAVIGATION = LAYOUT_DASHBOARD_ADMIN_NAVIGATION;
}
