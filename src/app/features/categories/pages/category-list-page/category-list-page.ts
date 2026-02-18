import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CategoryModel } from '@features/categories/models/category-model';
import { CategoryService } from '@features/categories/services/category-service';
import { ApiResponseModel } from '@shared/models/api-response-model';
import { catchError, finalize, of } from 'rxjs';
import { LoadingComponent } from "@shared/components/loading-component/loading-component";
import { CategoryListComponent } from "@features/categories/components/category-list-component/category-list-component";
import { MessageErrorComponent } from "@shared/components/message-error-component/message-error-component";
import { ROUTES_CONSTANT } from '@shared/constants/routes-constant';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-category-list-page',
  imports: [
    LoadingComponent,
    CategoryListComponent,
    MessageErrorComponent,
    RouterLink,
],
  templateUrl: './category-list-page.html',
})
export class CategoryListPage {
  private categoryService = inject(CategoryService);
  ROUTES_CONSTANT=ROUTES_CONSTANT;

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
