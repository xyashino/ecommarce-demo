'use client'

import { StatsCardsSection } from '@/components/card-section'
import { CustomersList } from '@/components/customers/customers-list'
import { IconShoppingBag, IconTrendingUp, IconUsers } from '@tabler/icons-react'
import { useTranslations } from 'next-intl'

export default function CustomersPage() {
  const t = useTranslations('Customers')

  const CUSTOMER_STATS = [
    {
      title: t('totalCustomers'),
      icon: <IconUsers className="h-4 w-4 text-muted-foreground" />,
      value: '12',
      footer: `+2 ${t('thisMonth')}`
    },
    {
      title: t('activeCustomers'),
      icon: <IconTrendingUp className="h-4 w-4 text-muted-foreground" />,
      value: '10',
      footer: `80% ${t('allCustomers')}`
    },
    {
      title: t('inactiveCustomers'),
      icon: <IconUsers className="h-4 w-4 text-muted-foreground" />,
      value: '2',
      footer: `20% ${t('allCustomers')}`
    },
    {
      title: t('averageOrderValue'),
      icon: <IconShoppingBag className="h-4 w-4 text-muted-foreground" />,
      value: '12',
      footer: `+12% ${t('vsLastMonth')}`
    }
  ]

  return (
    <div className="space-y-6">
      <StatsCardsSection cards={CUSTOMER_STATS} />
      <CustomersList />
    </div>
  )
}
