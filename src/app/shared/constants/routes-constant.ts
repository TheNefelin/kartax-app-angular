export const ROUTES_CONSTANT = {
  HOME: '/',
  PROTECTED: {
    ADMIN: {
      DASHBOARD: '/admin',
      CATEGORIES: '/admin/categories',
      GROUPS: '/admin/groups',
      PRODUCTS: '/admin/products',
      MOBILE: '/admin/kartax',
      TEST: '/admin/test',
    }
  }
} as const;