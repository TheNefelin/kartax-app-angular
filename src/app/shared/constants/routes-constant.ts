export const ROUTES_CONSTANT = {
  HOME: '/',
  PUBLIC: {
    PANEL: 'admin',
    MOBILE: 'mobile'
  },
  PROTECTED: {
    ADMIN: {
      HOME: '/',
      CATEGORIES: '/admin/categories',
      GROUPS: '/admin/groups',
      PRODUCTS: '/admin/products',
      MOBILE: '/admin/kartax',
      TEST: '/admin/test',
    }
  }
} as const;