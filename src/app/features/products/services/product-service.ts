import { inject, Injectable } from '@angular/core';
import { ApiService } from '@core/services/api-service';
import { ProductModel } from '../models/product-model';
import { ApiResponseModel } from '@core/models/api-response-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiResponseService = inject(ApiService)
  private readonly endpoint = 'products';

  getAll(): Observable<ApiResponseModel<ProductModel[]>> {
    return this.apiResponseService.getAll<ApiResponseModel<ProductModel[]>>(
      `${this.endpoint}`
    );
  }

  getById(id: string): Observable<ApiResponseModel<ProductModel | null>> {
    return this.apiResponseService.getById<ApiResponseModel<ProductModel | null>>(
      this.endpoint, id
    );
  }

  getByGroupId(groupId: string): Observable<ApiResponseModel<ProductModel[]>> {
    return this.apiResponseService.getById<ApiResponseModel<ProductModel[]>>(
      `${this.endpoint}/group/`, groupId
    );
  }
}
