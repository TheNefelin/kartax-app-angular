import { Component, input } from '@angular/core';
import { RouterLink } from "@angular/router";
import { RouteModel } from '@shared/models/route-model';

@Component({
  selector: 'app-navbar-public-component',
  imports: [RouterLink],
  templateUrl: './navbar-public-component.html',
})
export class NavbarPublicComponent {
  readonly navBarRoute = input.required<RouteModel[]>();
}
