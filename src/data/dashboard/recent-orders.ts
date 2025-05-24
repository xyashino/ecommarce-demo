import { Order } from '../orders/orders'

export interface RecentOrder {
  id: string
  customer: string
  product: string
  amount: string
  status: Order['status']
  date: string
}

export const recentOrders: RecentOrder[] = [
  {
    id: 'ORD-001',
    customer: 'Jan Kowalski',
    product: 'Laptop Dell XPS 13',
    amount: '4,999 zł',
    status: 'ordered',
    date: '2024-01-15'
  },
  {
    id: 'ORD-002',
    customer: 'Anna Nowak',
    product: 'iPhone 15 Pro',
    amount: '5,499 zł',
    status: 'shipped',
    date: '2024-01-14'
  },
  {
    id: 'ORD-003',
    customer: 'Piotr Wiśniewski',
    product: 'Klawiatura mechaniczna',
    amount: '299 zł',
    status: 'completed',
    date: '2024-01-13'
  },
  {
    id: 'ORD-004',
    customer: 'Maria Lewandowska',
    product: 'Monitor 4K 27"',
    amount: '1,299 zł',
    status: 'ordered',
    date: '2024-01-12'
  },
  {
    id: 'ORD-005',
    customer: 'Tomasz Zieliński',
    product: 'Słuchawki bezprzewodowe',
    amount: '199 zł',
    status: 'shipped',
    date: '2024-01-11'
  }
]
