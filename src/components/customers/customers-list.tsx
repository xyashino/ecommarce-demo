'use client'

import { CardTable } from '@/components/card-table'
import { customers, type Customer } from '@/data/customers/customers'
import { useTranslations } from 'next-intl'
import { CustomerBadge } from './customer-badge'

export function CustomersList() {
  const t = useTranslations('Customers')

  return (
    <CardTable
      title={t('customersTitle')}
      description={t('customersDescription')}
      headers={[
        { key: 'id', label: t('id'), className: 'font-medium' },
        { key: 'fullName', label: t('customer'), className: 'font-medium' },
        { key: 'email', label: t('email') },
        { key: 'totalOrders', label: t('totalOrders') },
        {
          key: 'totalSpent',
          label: t('totalSpent'),
          className: 'font-medium'
        },
        { key: 'lastOrderDate', label: t('lastOrderDate') },
        { key: 'status', label: t('status') }
      ]}
      rows={customers}
      cellRenderer={(key, data) => {
        switch (key) {
          case 'lastOrderDate':
            return new Date(data).toLocaleDateString('pl-PL')
          case 'status':
            return <CustomerBadge status={data as Customer['status']} />
          default:
            return data
        }
      }}
    />
  )
}
