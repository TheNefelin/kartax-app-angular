import { inject, Injectable } from '@angular/core';
import { ApiService } from '@core/services/api-service';
import { Observable } from 'rxjs';
import { CategoryHierarchyModel } from '../models/category-hierarchy-model';
import { ApiResponseModel } from '@core/models/api-response-model';

@Injectable({
  providedIn: 'root',
})
export class MobileService {
  private apiService = inject(ApiService)
  private readonly endpoint = 'mobile/products-hierarchy';

  getAll(): Observable<ApiResponseModel<CategoryHierarchyModel[]>> {
    return this.apiService.getAll<ApiResponseModel<CategoryHierarchyModel[]>>(
      `${this.endpoint}`
    );
  }
}
