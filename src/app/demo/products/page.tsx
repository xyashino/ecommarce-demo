'use client'

import { StatsCardsSection } from '@/components/card-section'
import { ProductsList } from '@/components/products/products-list'
import {
  IconAlertTriangle,
  IconPackage,
  IconShoppingBag,
  IconTrendingUp
} from '@tabler/icons-react'
import { useTranslations } from 'next-intl'

export default function ProduktyPage() {
  const t = useTranslations('Products')

  const PRODUCTS_STATS = [
    {
      title: t('allProducts'),
      value: '6',
      footer: t('inOffer'),
      icon: <IconShoppingBag className="h-4 w-4 text-muted-foreground" />,
      color: 'text-blue-600'
    },
    {
      title: t('available'),
      value: '5',
      footer: t('inStock'),
      icon: <IconPackage className="h-4 w-4 text-green-600" />,
      color: 'text-green-600'
    },
    {
      title: t('lowStock'),
      value: '1',
      footer: t('needsReplenishment'),
      icon: <IconAlertTriangle className="h-4 w-4 text-orange-600" />,
      color: 'text-orange-600'
    },
    {
      title: t('warehouseValue'),
      value: '125 430 zł',
      footer: t('totalValue'),
      icon: <IconTrendingUp className="h-4 w-4 text-purple-600" />,
      color: 'text-purple-600'
    }
  ]

  return (
    <div className="space-y-6">
      <StatsCardsSection cards={PRODUCTS_STATS} />
      <ProductsList />
    </div>
  )
}
