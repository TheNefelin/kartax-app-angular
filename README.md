# Kartax Angular 21

## Structure
```
project
│
├─ public/
│   ├─ images/
│   └─ favicon.ico
│
├─ src/
│   ├─ app/
│   │   ├─ core/
│   │   │   └─ services/
│   │   │       └─ api-response-service.ts
│   │   │
│   │   ├─ features/
│   │   │   ├─ categories/
│   │   │   │   ├─ models/
│   │   │   │   │   └─ category-model.ts
│   │   │   │   └─ services/
│   │   │   │       └─ category-service.ts
│   │   │   ├─ mobile/
│   │   │   │   ├─ components/
│   │   │   │   │   ├─ cart-component/
│   │   │   │   │   ├─ product-group-component/
│   │   │   │   │   ├─ product-item-component/
│   │   │   │   │   └─ product-list-component/
│   │   │   │   ├─ pages/
│   │   │   │   │   ├─ order-page/
│   │   │   │   │   └─ products-page/
│   │   │   │   └─ news.routes.ts
│   │   │   │
│   │   │   └─ public/
│   │   │       ├─ pages/
│   │   │       │   └─ home-page/
│   │   │       └─ news.routes.ts
│   │   │
│   │   ├─ layouts/
│   │   │   ├─ components/
│   │   │   │   ├─ footer-component/
│   │   │   │   ├─ navbar-mobile-component/
│   │   │   │   └─ navbar-public-component/
│   │   │   ├─ layout-mobile/
│   │   │   └─ layout-public/
│   │   │
│   │   ├─ shared/
│   │   │   ├─ components/
│   │   │   │   └─ loading-component/
│   │   │   └─ models/
│   │   │       └─ api-response-model.ts
│   │   │
│   │   ├─ app.config.ts
│   │   ├─ app.html
│   │   ├─ app.routes.ts
│   │   └─ app.ts
│   │
│   ├── environments/
│   │   └── environment.ts
│   │
│   ├─ index.html
│   ├─ main.ts
│   └─ styles.css
│
├─ LICENSE.txt
└─ README.md
```

## Components
```sh
# ----------------------------------------------------------------------------
# CORE
ng g interface core/models/api-response-model

ng g c core/pages/not-found-page --skip-tests --style=none
ng g c core/pages/test-page --skip-tests --style=none

ng g s core/services/api-service --skip-tests
ng g s core/services/mobile-service --skip-tests

# ----------------------------------------------------------------------------
# FEATURES CATEGORIES
ng g c features/categories/components/category-form-component --skip-tests --style=none
ng g c features/categories/components/category-list-component --skip-tests --style=none
ng g c features/categories/components/category-row-component --skip-tests --style=none

ng g interface features/categories/models/category-model

ng g c features/categories/pages/category-form-page --skip-tests --style=none
ng g c features/categories/pages/category-list-page --skip-tests --style=none

ng g s features/categories/services/category-service --skip-tests

# ----------------------------------------------------------------------------
# FEATURES DASHBOARD
ng g c features/dashboard/components/dashboard-component --skip-tests --style=none

ng g interface features/dashboard/models/dashboard-route-model

# ----------------------------------------------------------------------------
# FEATURES GROUPS
ng g interface features/groups/models/group-model

ng g c features/groups/pages/group-form-page --skip-tests --style=none
ng g c features/groups/pages/group-list-page --skip-tests --style=none

ng g s features/groups/services/group-service --skip-tests

# ----------------------------------------------------------------------------
# FEATURES PRODUCTS
ng g interface features/products/models/product-model

ng g c features/products/pages/product-form-page --skip-tests --style=none
ng g c features/products/pages/product-list-page --skip-tests --style=none

ng g s features/products/services/product-service --skip-tests

# ----------------------------------------------------------------------------
# FEATURES KARTAX
ng g c features/kartax/pages/kartax-page --skip-tests --style=none
ng g c features/kartax/pages/mobile-page --skip-tests --style=none

# ----------------------------------------------------------------------------
# LAYOUTS
ng g c layouts/components/footer-component --skip-tests --style=none
ng g c layouts/components/navbar-mobile-component --skip-tests --style=none
ng g c layouts/components/navbar-public-component --skip-tests --style=none

ng g c layouts/layout-admin --skip-tests --style=none
ng g c layouts/layout-mobile --skip-tests --style=none
ng g c layouts/layout-public --skip-tests --style=none

# ----------------------------------------------------------------------------
# SHARED
ng g c shared/components/loading-component --skip-tests --style=none
ng g c shared/components/message-error-component --skip-tests --style=none

# ----------------------------------------------------------------------------

# FEATURES MOBILE
ng g c features/mobile/components/cart-component --skip-tests --style=none
ng g c features/mobile/components/product-group-component --skip-tests --style=none
ng g c features/mobile/components/product-item-component --skip-tests --style=none
ng g c features/mobile/components/product-list-component --skip-tests --style=none
ng g c features/mobile/pages/products-page --skip-tests --style=none
ng g c features/mobile/pages/order-page --skip-tests --style=none
ng g s features/mobile/services/mobile-service --skip-tests

# FEATURES MOBILE
ng g interface features/mobile/models/category-hierarchy-model
ng g interface features/mobile/models/group-hierarchy-model

```

---
---
---
---
---

# KartaxAppAngular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
