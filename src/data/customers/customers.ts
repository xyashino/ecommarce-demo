export interface Customer {
  id: string
  firstName: string
  lastName: string
  fullName: string
  email: string
  totalOrders: number
  totalSpent: string
  lastOrderDate: string
  status: 'active' | 'inactive'
  registrationDate: string
}

export const customers: Customer[] = [
  {
    id: 'CUST-001',
    fullName: 'Jan Kowalski',
    firstName: 'Jan',
    lastName: 'Kowalski',
    email: 'jan.kowalski@email.com',
    totalOrders: 8,
    totalSpent: '12,450 zł',
    lastOrderDate: '2024-01-15',
    status: 'active',
    registrationDate: '2023-06-12'
  },
  {
    id: 'CUST-002',
    firstName: 'Anna',
    lastName: 'Nowak',
    fullName: 'Anna Nowak',
    email: 'anna.nowak@email.com',
    totalOrders: 15,
    totalSpent: '28,990 zł',
    lastOrderDate: '2024-01-14',
    status: 'active',
    registrationDate: '2023-03-08'
  },
  {
    id: 'CUST-003',
    fullName: 'Piotr Wiśniewski',
    firstName: 'Piotr',
    lastName: 'Wiśniewski',
    email: 'piotr.wisniewski@email.com',
    totalOrders: 3,
    totalSpent: '2,150 zł',
    lastOrderDate: '2024-01-10',
    status: 'active',
    registrationDate: '2023-11-22'
  },
  {
    id: 'CUST-004',
    firstName: 'Maria',
    lastName: 'Lewandowska',
    fullName: 'Maria Lewandowska',
    email: 'maria.lewandowska@email.com',
    totalOrders: 22,
    totalSpent: '45,670 zł',
    lastOrderDate: '2024-01-12',
    status: 'active',
    registrationDate: '2023-01-15'
  },
  {
    id: 'CUST-005',
    firstName: 'Tomasz',
    lastName: 'Zieliński',
    fullName: 'Tomasz Zieliński',
    email: 'tomasz.zielinski@email.com',
    totalOrders: 1,
    totalSpent: '599 zł',
    lastOrderDate: '2023-12-20',
    status: 'inactive',
    registrationDate: '2023-12-19'
  }
]
