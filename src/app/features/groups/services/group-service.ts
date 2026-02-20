import { inject, Injectable } from '@angular/core';
import { GroupModel } from '../models/group-model';
import { ApiResponseModel } from '@core/models/api-response-model';
import { Observable } from 'rxjs';
import { ProductModel } from '@features/products/models/product-model';
import { ApiService } from '@core/services/api-service';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  private apiResponseService = inject(ApiService)
  private readonly endpoint = 'groups';

  getAll(): Observable<ApiResponseModel<GroupModel[]>> {
    return this.apiResponseService.getAll<ApiResponseModel<GroupModel[]>>(
      `${this.endpoint}`
    );
  }

  getById(id: string): Observable<ApiResponseModel<GroupModel | null>> {
    return this.apiResponseService.getById<ApiResponseModel<GroupModel | null>>(
      this.endpoint, id
    );
  }

  getByGroupId(groupId: string): Observable<ApiResponseModel<GroupModel[]>> {
    return this.apiResponseService.getById<ApiResponseModel<GroupModel[]>>(
      `${this.endpoint}/category/`, groupId
    );
  }
}
