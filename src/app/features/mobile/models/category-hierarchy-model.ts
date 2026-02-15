import { CategoryModel } from "@features/categories/models/category-model";
import { GroupHierarchyModel } from "@features/mobile/models/group-hierarchy-model";

export interface CategoryHierarchyModel extends CategoryModel {
  groups: GroupHierarchyModel[];
}
