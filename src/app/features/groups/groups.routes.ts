import { Routes } from "@angular/router";
import { GroupListPage } from "@features/groups/pages/group-list-page/group-list-page";
import { GroupFormPage } from "@features/groups/pages/group-form-page/group-form-page";

export const GROUP_ROUTES: Routes = [
  {
    path: '',
    component: GroupListPage,
  },
  {
    path: 'form',
    component: GroupFormPage,
  },
]
