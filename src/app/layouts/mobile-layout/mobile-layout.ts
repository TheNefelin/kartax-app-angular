import { Component } from '@angular/core';
import { NavbarComponent } from "@shared/components/navbar-component/navbar-component";
import { FooterComponent } from "@shared/components/footer-component/footer-component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-mobile-layout',
  imports: [
    NavbarComponent,
    FooterComponent,
    RouterOutlet
],
  templateUrl: './mobile-layout.html',
})
export class MobileLayout {

}
