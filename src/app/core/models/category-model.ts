import { GroupModel } from "./group-model";

export interface CategoryModel {
  id_category: number,
  name: string,
  img_url: string,
  is_enable: boolean,
  created_at: string,
  updated_at: string,
  groups: GroupModel[]
}
