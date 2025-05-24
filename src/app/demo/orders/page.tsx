'use client'

import { StatsCardsSection } from '@/components/card-section'
import { OrdersList } from '@/components/orders/orders-list'
import { IconShoppingCart, IconTruck } from '@tabler/icons-react'
import { CheckCircle, Clock } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function OrdersPage() {
  const t = useTranslations('Orders')

  const CARD_STATS = [
    {
      title: t('allOrders'),
      value: '12',
      footer: t('allOrders'),
      icon: <IconShoppingCart className="h-4 w-4 text-muted-foreground" />,
      color: 'text-orange-600'
    },
    {
      title: t('ordered'),
      value: '12',
      footer: t('waitingForRealization'),
      icon: <Clock className="h-4 w-4 text-orange-600" />,
      color: 'text-orange-600'
    },
    {
      title: t('shipped'),
      value: '12',
      footer: t('onTheWay'),
      icon: <IconTruck className="h-4 w-4 text-blue-600" />,
      color: 'text-blue-600'
    },
    {
      title: t('completed'),
      value: '12',
      footer: t('realized'),
      icon: <CheckCircle className="h-4 w-4 text-green-600" />,
      color: 'text-green-600'
    }
  ]

  return (
    <div className="space-y-6">
      <StatsCardsSection cards={CARD_STATS} />
      <OrdersList />
    </div>
  )
}
