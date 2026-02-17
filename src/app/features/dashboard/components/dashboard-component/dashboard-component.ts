import { Component, inject, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RouterLink, RouterOutlet } from "@angular/router";
import { DashboardRouteModel } from '@features/dashboard/models/dashboard-route-model';

@Component({
  selector: 'app-dashboard-component',
  imports: [
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './dashboard-component.html',
})
export class DashboardComponent {
  readonly dashboardRoute = input.required<DashboardRouteModel[]>();

  readonly sanitizer = inject(DomSanitizer);

  sanitize(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}
