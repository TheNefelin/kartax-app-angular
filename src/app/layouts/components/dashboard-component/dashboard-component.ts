import { Component, inject, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RouterLink, RouterOutlet } from "@angular/router";
import { RouteModel } from '@shared/models/route-model';

@Component({
  selector: 'app-dashboard-component',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './dashboard-component.html',
})
export class DashboardComponent {
  readonly dashboardRoute = input.required<RouteModel[]>();

  readonly sanitizer = inject(DomSanitizer);

  sanitize(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}
