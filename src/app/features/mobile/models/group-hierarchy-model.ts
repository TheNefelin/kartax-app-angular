import { GroupModel } from "@features/group/models/group-model";
import { ProductModel } from "@features/products/models/product-model";

export interface GroupHierarchyModel extends GroupModel {
  products: ProductModel[];
}
