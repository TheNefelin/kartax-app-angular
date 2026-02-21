import { Component } from '@angular/core';
import { DashboardComponent } from '@layouts/components/dashboard-component/dashboard-component';
import { LAYOUT_ADMIN_DASHBOARD_NAVIGATION } from '@shared/constants/layout-admin-dashboard-routes';

@Component({
  selector: 'app-layout-admin',
  imports: [
    DashboardComponent
  ],
  templateUrl: './layout-admin.html',
})
export class LayoutAdmin {
  LAYOUT_ADMIN_DASHBOARD_NAVIGATION = LAYOUT_ADMIN_DASHBOARD_NAVIGATION;
}
