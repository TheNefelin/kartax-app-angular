import { DatePipe, NgOptimizedImage } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryModel } from '@features/categories/models/category-model';
import { ROUTES_CONSTANT } from '@shared/constants/routes-constant';

@Component({
  selector: 'app-category-row-component',
  imports: [
    DatePipe,
    NgOptimizedImage
],
  templateUrl: './category-row-component.html',
})
export class CategoryRowComponent {
  private readonly router = inject(Router);
  readonly category = input.required<CategoryModel>();
  readonly delete = output<CategoryModel>();

  protected onDelete(item: CategoryModel): void {
    this.delete.emit(item);
  }

  protected onEdit(item: CategoryModel): void {
    console.log('Editando categoría:', item);
    this.router.navigate([ROUTES_CONSTANT.PROTECTED.ADMIN.CATEGORIES, 'form'], { state: { category: item } });
  }
}
