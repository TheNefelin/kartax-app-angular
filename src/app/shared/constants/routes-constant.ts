export const ROUTES_CONSTANT = {
  HOME: '/',
  PROTECTED: {
    ADMIN: {
      DASHBOARD: '/admin',
      CATEGORIES: '/admin/categories',
      GROUPS: '/admin/groups',
      PRODUCTS: '/admin/products',
    }
  }
} as const;