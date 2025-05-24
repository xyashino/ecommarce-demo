'use client'

import { Badge } from '@/components/ui/badge'
import { products, type Product } from '@/data/products/products'
import { useTranslations } from 'next-intl'
import { CardTable } from '../card-table'
import { ProductImage } from './product-image'
import { ProductStockBadge } from './product-stock-badge'

type ProductWithStatus = Product & { stockStatus: number }

export function ProductsList() {
  const t = useTranslations('Products')
  const productsWithStatus: ProductWithStatus[] = products.map(product => ({
    ...product,
    stockStatus: product.stock
  }))

  return (
    <CardTable
      title={t('allProducts')}
      description={t('inOffer')}
      headers={[
        { key: 'id', label: t('id'), className: 'font-medium' },
        { key: 'imageUrl', label: t('image') },
        { key: 'name', label: t('name'), className: 'font-medium' },
        { key: 'category', label: t('category') },
        { key: 'price', label: t('price'), className: 'font-medium' },
        { key: 'stock', label: t('stock') },
        { key: 'stockStatus', label: t('stockStatus') },
        { key: 'createdAt', label: t('createdAt') }
      ]}
      rows={productsWithStatus}
      cellRenderer={(key, data, row) => {
        switch (key) {
          case 'imageUrl':
            return <ProductImage imageUrl={data as string} name={row.name} />
          case 'category':
            return <Badge variant="outline">{t(data as string)}</Badge>
          case 'price':
            return `${(data as number).toLocaleString('pl-PL')} zł`
          case 'stock':
            return `${data} szt.`
          case 'stockStatus':
            return <ProductStockBadge stock={Number(data)} />
          case 'createdAt':
            return (
              <span className="text-sm text-muted-foreground">
                {new Date(data as string).toLocaleDateString('pl-PL')}
              </span>
            )
          default:
            return data
        }
      }}
    />
  )
}
