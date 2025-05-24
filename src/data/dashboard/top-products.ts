export interface TopProduct {
  name: string
  sales: number
  revenue: string
  trend: string
}

export const topProducts: TopProduct[] = [
  {
    name: 'Laptop Dell XPS 13',
    sales: 245,
    revenue: '24,500 zł',
    trend: '+15%'
  },
  {
    name: 'iPhone 15 Pro',
    sales: 189,
    revenue: '22,680 zł',
    trend: '+12%'
  },
  {
    name: 'Klawiatura mechaniczna',
    sales: 156,
    revenue: '7,800 zł',
    trend: '+8%'
  },
  {
    name: 'Monitor 4K 27"',
    sales: 134,
    revenue: '16,080 zł',
    trend: '+5%'
  },
  {
    name: 'Słuchawki bezprzewodowe',
    sales: 98,
    revenue: '4,900 zł',
    trend: '+3%'
  }
]
