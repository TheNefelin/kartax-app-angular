import { Component, computed, ElementRef, inject, QueryList, signal, ViewChildren } from '@angular/core';
import { ProductGroupComponent } from "@features/mobile/components/product-group-component/product-group-component";
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ApiResponseModel } from '@shared/models/api-response-model';
import { CartComponent } from "@features/mobile/components/cart-component/cart-component";
import { LoadingComponent } from "@shared/components/loading-component/loading-component";
import { MobileService } from '@features/mobile/services/mobile-service';
import { CategoryHierarchyModel } from '@features/mobile/models/category-hierarchy-model';

@Component({
  selector: 'app-products-page',
  imports: [
    CommonModule,
    NgOptimizedImage,
    ProductGroupComponent,
    CartComponent,
    LoadingComponent
],
  templateUrl: './products-page.html',
})
export class ProductsPage {
  private mobileService = inject(MobileService);

  readonly selectedCategory = signal<CategoryHierarchyModel | null>(null);

  private categorySignal = toSignal(
    this.mobileService.getAll().pipe(
      catchError((err) => {
        return of({
          isSuccess: false,
          statusCode: 500,
          message: err.message || 'Error al cargar las categorías',
          result: null
        } as ApiResponseModel<null> );
      })
    ),
    { initialValue: undefined }
  );

  categoriesResult = computed(() => this.categorySignal());
  loading = computed(() => this.categorySignal() === undefined);

  selectCategory(category: CategoryHierarchyModel) {
    this.selectedCategory.set(category);
  }

  @ViewChildren('carouselItem') carouselItems!: QueryList<ElementRef<HTMLDivElement>>;

  ngAfterViewInit() {
    // Cuando los elementos de carouselItems cambien, se llama setupObserver
    this.carouselItems.changes.subscribe(() => this.setupObserver());
    this.setupObserver(); // Para el primer render (si ya hay items)
  }

  setupObserver() {
    if (!this.carouselItems || this.carouselItems.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = +entry.target.getAttribute('data-index')!;
          this.selectCategory(this.categoriesResult()?.result?.[index]!);
        }
      });
    }, { threshold: 0.5 });

    this.carouselItems.forEach(item => observer.observe(item.nativeElement));
  }
}
