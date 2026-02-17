import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CategoryListComponent } from "@features/categories/components/category-list-component/category-list-component";
import { CategoryModel } from '@features/categories/models/category-model';
import { CategoryService } from '@features/categories/services/category-service';
import { ApiResponseModel } from '@shared/models/api-response-model';
import { catchError, finalize, of } from 'rxjs';
import { LoadingComponent } from "@shared/components/loading-component/loading-component";
import { MessageErrorComponent } from '@shared/components/message-error-component/message-error-component';

@Component({
  selector: 'app-category-page-component',
  imports: [
    CommonModule,
    CategoryListComponent,
    LoadingComponent,
    MessageErrorComponent,
],
  templateUrl: './category-page-component.html',
})
export class CategoryPageComponent {
  private categoryService = inject(CategoryService);

  readonly loading = signal(true);
  readonly selectedCategory = signal<CategoryModel | null>(null);

  private categorySignal = toSignal(
    this.categoryService.getAll().pipe(
      catchError((err) => {
        return of({
          isSuccess: false,
          statusCode: 500,
          message: err?.message || String(err),
          result: null
        } as ApiResponseModel<null> );
      }), finalize(() => {
        this.loading.set(false);
      })
    ),
    { initialValue: undefined }
  );

  categoriesResult = computed(() => this.categorySignal());
}
