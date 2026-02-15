import { inject, Injectable } from '@angular/core';
import { ApiService } from '@core/services/api-service';
import { ApiResponseModel } from '@shared/models/api-response-model';
import { Observable } from 'rxjs';
import { CategoryHierarchyModel } from '../models/category-hierarchy-model';

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
