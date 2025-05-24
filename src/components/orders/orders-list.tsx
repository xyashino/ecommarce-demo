'use client'

import { CardTable } from '@/components/card-table'
import { orders, type Order } from '@/data/orders/orders'
import { useTranslations } from 'next-intl'
import { OrderBadge } from './order-badge'
import { OrderProductCell } from './order-product-cell'

type OrderWithCustomerFields = Order & {
  customerName: string
  customerEmail: string
}

export function OrdersList() {
  const t = useTranslations('Orders')
  const ordersWithCustomerFields: OrderWithCustomerFields[] = orders.map(
    order => ({
      ...order,
      customerName: order.customer.name,
      customerEmail: order.customer.email
    })
  )

  return (
    <CardTable
      title={t('ordersTitle')}
      description={t('ordersDescription')}
      headers={[
        { key: 'id', label: t('id'), className: 'font-medium' },
        { key: 'customerName', label: t('customer'), className: 'font-medium' },
        { key: 'products', label: t('products') },
        { key: 'amount', label: t('amount'), className: 'font-medium' },
        { key: 'status', label: t('status') },
        { key: 'date', label: t('date'), className: 'text-sm' }
      ]}
      rows={ordersWithCustomerFields}
      cellRenderer={(key, data, currentOrder) => {
        switch (key) {
          case 'id':
            return <span className="font-medium">{String(data)}</span>
          case 'customerName':
            return (
              <div>
                <div className="font-medium">{String(data)}</div>
                <div className="text-sm text-muted-foreground">
                  {currentOrder.customerEmail}
                </div>
              </div>
            )
          case 'products':
            return <OrderProductCell products={currentOrder.products} />
          case 'status':
            return <OrderBadge status={String(data) as Order['status']} />
          case 'date':
            return new Date(String(data)).toLocaleDateString('pl-PL')
          default:
            return String(data)
        }
      }}
    />
  )
}
