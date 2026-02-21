import { Component } from '@angular/core';
import { NavbarPublicComponent } from "@layouts/components/navbar-public-component/navbar-public-component";
import { FooterComponent } from "@layouts/components/footer-component/footer-component";
import { RouterOutlet } from '@angular/router';
import { LAYOUT_PUBLIC_DASHBOARD_NAVIGATION } from '@shared/constants/layout-public-dashboard-routes';

@Component({
  selector: 'app-layout-public',
  imports: [
    NavbarPublicComponent,
    FooterComponent,
    RouterOutlet
],
  templateUrl: './layout-public.html',
})
export class LayoutPublic {
  LAYOUT_PUBLIC_DASHBOARD_NAVIGATION = LAYOUT_PUBLIC_DASHBOARD_NAVIGATION
}
