import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { recentOrders } from '@/data/dashboard/recent-orders'
import { useTranslations } from 'next-intl'
import { OrderBadge } from '../orders/order-badge'

export function RecentOrders() {
  const t = useTranslations('Dashboard')
  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('recentOrdersTitle')}</CardTitle>
        <CardDescription>{t('recentOrdersDescription')}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentOrders.map(order => (
            <div
              key={order.id}
              className="flex items-center justify-between p-4 rounded-lg border bg-muted/50"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-medium text-sm">{order.id}</span>
                  <OrderBadge status={order.status} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs text-muted-foreground">
                  <span>
                    <strong>{t('customer')}:</strong> {order.customer}
                  </span>
                  <span>
                    <strong>{t('product')}:</strong> {order.product}
                  </span>
                  <span>
                    <strong>{t('date')}:</strong> {order.date}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-sm">{order.amount}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
