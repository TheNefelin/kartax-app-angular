import { JsonPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductService } from '@features/products/services/product-service';
import { map } from 'rxjs';
import { LoadingComponent } from "@shared/components/loading-component/loading-component";
import { MessageErrorComponent } from "@shared/components/message-error-component/message-error-component";

@Component({
  selector: 'app-product-list-page',
  imports: [
    JsonPipe,
    LoadingComponent,
    MessageErrorComponent
],
  templateUrl: './product-list-page.html',
})
export class ProductListPage {
  private readonly productService = inject(ProductService);

  private readonly dataRX = rxResource({
    stream: () => {    
      return this.productService.getAll().pipe(
        map(response => {
          if (!response.isSuccess) throw new Error(response.message);
  
          return response.result; 
        })
      );
    },
  });

  readonly isLoading = this.dataRX.isLoading;

  readonly errorMessage = computed(() => {
    const backendError = this.dataRX.error()?.message;
    if (backendError) return backendError;

    return null;
  });

  readonly dataComputed = computed(() => {
    const data = this.dataRX.value();
    if (!data) return [];

    return data;
  });
}
