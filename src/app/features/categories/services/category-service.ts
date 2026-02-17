import { inject, Injectable } from '@angular/core';
import { ApiService } from '@core/services/api-service';
import { ApiResponseModel } from '@shared/models/api-response-model';
import { Observable } from 'rxjs';
import { CategoryModel } from '@features/categories/models/category-model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiResponseService = inject(ApiService)
  private readonly endpoint = 'categories';

  getAll(): Observable<ApiResponseModel<CategoryModel[]>> {
    return this.apiResponseService.getAll<ApiResponseModel<CategoryModel[]>>(
      `${this.endpoint}`
    );
  }

  getById(id: number): Observable<ApiResponseModel<CategoryModel | null>> {
    return this.apiResponseService.getById<ApiResponseModel<CategoryModel | null>>(
      this.endpoint, id
    );
  }

  create(news_id: number, file: File, alt: string): Observable<ApiResponseModel<CategoryModel>> {
    const formData = new FormData();
    formData.append('files', file);
    formData.append('alts', alt);

    return this.apiResponseService.create<ApiResponseModel<CategoryModel>, FormData>(
      `${this.endpoint}/${news_id}`, formData
    );
  }

  delete(id: number): Observable<ApiResponseModel<object>> {
    return this.apiResponseService.delete<ApiResponseModel<object>>(
      this.endpoint, id
    );
  }
}
