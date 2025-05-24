'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { salesChartData } from '@/data/dashboard/sales-chart'
import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'

const ChartComponent = dynamic(
  () => {
    return import('recharts').then(recharts => {
      const { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip } =
        recharts

      return function Chart({
        data,
        t
      }: {
        data: unknown[]
        t: (key: string) => string
      }) {
        return (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="hsl(var(--primary))"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="hsl(var(--primary))"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
                tickFormatter={(value: number) =>
                  `${(value / 1000).toFixed(0)}k zł`
                }
              />
              <Tooltip
                labelStyle={{ color: 'hsl(var(--foreground))' }}
                contentStyle={{
                  backgroundColor: 'hsl(var(--background))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
                formatter={(value: number) => [
                  `${value.toLocaleString()} zł`,
                  t('salesChart')
                ]}
              />
              <Area
                type="monotone"
                dataKey="sales"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorSales)"
              />
            </AreaChart>
          </ResponsiveContainer>
        )
      }
    })
  },
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-full text-muted-foreground">
        Loading chart...
      </div>
    )
  }
)

export function SalesChart() {
  const t = useTranslations('Dashboard')

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('salesChart')}</CardTitle>
        <CardDescription>{t('salesChartDescription')}</CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="h-[200px]">
          <ChartComponent data={salesChartData} t={t} />
        </div>
      </CardContent>
    </Card>
  )
}
