'use client'

import { DashboardStats } from '@/components/demo/dashboard-stats'
import { RecentOrders } from '@/components/demo/recent-orders'
import { SalesChart } from '@/components/demo/sales-chart'
import { TopProducts } from '@/components/demo/top-products'

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-6">
      <DashboardStats />
      <div className="grid gap-6 md:grid-cols-2">
        <SalesChart />
        <TopProducts />
      </div>
      <RecentOrders />
    </div>
  )
}
