import {
  CreditCard,
  LucideIcon,
  Package,
  ShoppingCart,
  Users
} from 'lucide-react'

export interface DashboardStat {
  title: string
  value: string
  change: string
  changeType: 'increase' | 'decrease'
  icon: LucideIcon
}

export const getDashboardStats = (
  t: (key: string) => string
): DashboardStat[] => [
  {
    title: t('totalRevenue'),
    value: '54,239 zł',
    change: '+12.5%',
    changeType: 'increase',
    icon: CreditCard
  },
  {
    title: t('orders'),
    value: '1,234',
    change: '+8.2%',
    changeType: 'increase',
    icon: ShoppingCart
  },
  {
    title: t('products'),
    value: '456',
    change: '+3.1%',
    changeType: 'increase',
    icon: Package
  },
  {
    title: t('customers'),
    value: '2,847',
    change: '+15.4%',
    changeType: 'increase',
    icon: Users
  }
]
