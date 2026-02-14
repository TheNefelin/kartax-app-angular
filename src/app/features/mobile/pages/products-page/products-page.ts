import { Component, computed, ElementRef, inject, QueryList, signal, ViewChildren } from '@angular/core';
import { ProductGroupComponent } from "@features/mobile/components/product-group-component/product-group-component";
import { MobileService } from '@core/services/mobile-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ApiResponseModel } from '@core/models/api-response-model';
import { CategoryModel } from '@core/models/category-model';
import { CartComponent } from "@shared/components/cart-component/cart-component";

@Component({
  selector: 'app-products-page',
  imports: [
    CommonModule,
    NgOptimizedImage,
    ProductGroupComponent,
    CartComponent
],
  templateUrl: './products-page.html',
})
export class ProductsPage {
  private mobileService = inject(MobileService);

  readonly selectedCategory = signal<CategoryModel | null>(null);

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

  selectCategory(category: CategoryModel) {
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
