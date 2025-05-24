import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

type DetailsCardProps = {
  title: string
  value: string
  valueClassName?: string
  icon: ReactNode
  footer?: ReactNode
}

type StatsCardsSectionProps = {
  cards: DetailsCardProps[]
}

export function StatsCardsSection(props: StatsCardsSectionProps) {
  const { cards } = props
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {cards.map(card => (
        <DetailsCard key={card.title} {...card} />
      ))}
    </div>
  )
}

export function DetailsCard(props: DetailsCardProps) {
  const { title, value, valueClassName, icon, footer } = props
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className={cn('text-2xl font-bold', valueClassName)}>{value}</div>
        {footer}
      </CardContent>
    </Card>
  )
}
