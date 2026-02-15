import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@layouts/components/footer-component/footer-component';
import { NavbarMobileComponent } from '@layouts/components/navbar-mobile-component/navbar-mobile-component';


@Component({
  selector: 'app-layout-mobile',
  imports: [
    NavbarMobileComponent,
    FooterComponent,
    RouterOutlet,
  ],
  templateUrl: './layout-mobile.html',
})
export class LayoutMobile {

}
