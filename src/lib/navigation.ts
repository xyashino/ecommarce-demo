export type Navigation = keyof typeof NAVIGATION
export type NavigationValues = (typeof NAVIGATION)[Navigation]

export const NAVIGATION = {
  HOME: '/',
  DASHBOARD: '/demo',
  SETTINGS: '/demo/settings',
  CUSTOMERS: '/demo/customers',
  ORDERS: '/demo/orders',
  PRODUCTS: '/demo/products'
}

export const getPathnameMap = (
  t: (key: string) => string
): Record<NavigationValues, string> => ({
  [NAVIGATION.HOME]: t('home'),
  [NAVIGATION.DASHBOARD]: t('dashboard'),
  [NAVIGATION.SETTINGS]: t('settings'),
  [NAVIGATION.CUSTOMERS]: t('customers'),
  [NAVIGATION.ORDERS]: t('orders'),
  [NAVIGATION.PRODUCTS]: t('products')
})
