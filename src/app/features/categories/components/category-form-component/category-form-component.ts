import { Component, computed, input } from '@angular/core';
import { CategoryModel } from '@features/categories/models/category-model';

@Component({
  selector: 'app-category-form-component',
  imports: [],
  templateUrl: './category-form-component.html',
})
export class CategoryFormComponent {
  readonly loading = input.required<boolean>();
  readonly category = input<CategoryModel | null>(null);
  readonly isEditMode = computed(() => !!this.category()?.id_category);
  readonly actionText = computed(() => this.isEditMode() ? 'Modificar Categoría' : 'Crear Categoría');
}
