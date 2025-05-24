'use client'

import { Badge } from '@/components/ui/badge'
import { Order } from '@/data/orders/orders'
import { CheckCircle, Clock, Truck } from 'lucide-react'
import { useTranslations } from 'next-intl'

interface OrdersProps {
  status: Order['status']
}

export function OrderBadge(props: OrdersProps) {
  const { status } = props
  const t = useTranslations('Orders')

  return (
    <Badge variant={getStatusVariant(status)} className="gap-1">
      <span className={getStatusColor(status)}>{getStatusIcon(status)}</span>
      {t(status)}
    </Badge>
  )
}

const getStatusIcon = (status: Order['status']) => {
  switch (status) {
    case 'ordered':
      return <Clock className="h-3 w-3" />
    case 'shipped':
      return <Truck className="h-3 w-3" />
    case 'completed':
      return <CheckCircle className="h-3 w-3" />
    default:
      return <Clock className="h-3 w-3" />
  }
}

const getStatusVariant = (status: Order['status']) => {
  switch (status) {
    case 'ordered':
      return 'outline'
    case 'shipped':
      return 'default'
    case 'completed':
      return 'secondary'
    default:
      return 'outline'
  }
}

const getStatusColor = (status: Order['status']) => {
  switch (status) {
    case 'ordered':
      return 'text-orange-600'
    case 'shipped':
      return 'text-blue-600'
    case 'completed':
      return 'text-green-600'
    default:
      return 'text-gray-600'
  }
}
