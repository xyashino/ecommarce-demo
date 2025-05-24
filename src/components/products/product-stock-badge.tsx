import { Badge } from '@/components/ui/badge'
import { useTranslations } from 'next-intl'

export function ProductStockBadge({ stock }: { stock: number }) {
  const t = useTranslations('Products')
  if (stock === 0) {
    return <Badge variant="destructive">{t('outOfStock')}</Badge>
  }
  if (stock < 10) {
    return (
      <Badge variant="outline" className="text-orange-600 border-orange-600">
        {t('lowStock')}
      </Badge>
    )
  }
  return (
    <Badge variant="secondary" className="text-green-600">
      {t('available')}
    </Badge>
  )
}
