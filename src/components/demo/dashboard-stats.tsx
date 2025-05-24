'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getDashboardStats } from '@/data/dashboard/dashboard-stats'
import { TrendingDown, TrendingUp } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function DashboardStats() {
  const t = useTranslations('Dashboard')
  const dashboardStats = getDashboardStats(t)

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {dashboardStats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              {stat.changeType === 'increase' ? (
                <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
              ) : (
                <TrendingDown className="mr-1 h-3 w-3 text-destructive" />
              )}
              <span
                className={
                  stat.changeType === 'increase'
                    ? 'text-green-500'
                    : 'text-destructive'
                }
              >
                {stat.change}
              </span>
              <span className="ml-1">{t('vsLastMonth')}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
