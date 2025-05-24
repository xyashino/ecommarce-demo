'use client'

import { Badge } from '@/components/ui/badge'
import { type Customer } from '@/data/customers/customers'
import { useTranslations } from 'next-intl'

export const CustomerBadge = ({ status }: { status: Customer['status'] }) => {
  const t = useTranslations('Customers')

  if (status === 'active') {
    return (
      <Badge
        variant="default"
        className="bg-green-100 text-green-800 border-green-200"
      >
        {t('active')}
      </Badge>
    )
  }

  return (
    <Badge variant="outline" className="text-gray-600">
      {t('inactive')}
    </Badge>
  )
}
