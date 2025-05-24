'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { topProducts } from '@/data/dashboard/top-products'
import { TrendingUp } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function TopProducts() {
  const t = useTranslations('Dashboard')

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('topProducts')}</CardTitle>
        <CardDescription>{t('topProductsDescription')}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topProducts.map((product, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-lg border bg-muted/50"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm">{product.name}</span>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>
                    {product.sales} {t('sold')}
                  </span>
                  <span>{product.revenue}</span>
                </div>
              </div>
              <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                <TrendingUp className="h-3 w-3" />
                {product.trend}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
