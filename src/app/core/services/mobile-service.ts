import { inject, Injectable } from '@angular/core';
import { ApiResponseService } from '@core/helpers/api-response-service';
import { ApiResponseModel } from '@core/models/api-response-model';
import { CategoryModel } from '@core/models/category-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MobileService {
  private apiResponseService = inject(ApiResponseService)
  private readonly endpoint = 'api/categories/public';

  getAll(): Observable<ApiResponseModel<CategoryModel[]>> {
    return this.apiResponseService.getAll<ApiResponseModel<CategoryModel[]>>(
      `${this.endpoint}`
    );
  }
}
