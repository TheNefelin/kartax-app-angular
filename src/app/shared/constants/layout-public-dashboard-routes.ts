import { ROUTES_CONSTANT } from "@shared/constants/routes-constant";
import { RouteModel } from "@shared/models/route-model";

export const LAYOUT_PUBLIC_DASHBOARD_NAVIGATION: RouteModel[] = [
  {
    name: 'Panel',
    route: ROUTES_CONSTANT.PUBLIC.PANEL,
    iconSvg: ''
  },
  {
    name: 'Mobile',
    route: ROUTES_CONSTANT.PUBLIC.MOBILE,
    iconSvg: '',
  },
]