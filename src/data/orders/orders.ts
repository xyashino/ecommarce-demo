export interface OrderProduct {
  name: string
  quantity: number
  price: string
}

export interface OrderCustomer {
  name: string
  email: string
  id: string
}

export interface Order {
  id: string
  customer: OrderCustomer
  products: OrderProduct[]
  amount: string
  status: 'ordered' | 'shipped' | 'completed'
  date: string
  shippingAddress: string
  paymentMethod: string
}

export const orders: Order[] = [
  {
    id: 'ORD-001',
    customer: {
      name: 'Jan Kowalski',
      email: 'jan.kowalski@email.com',
      id: 'CUST-001'
    },
    products: [{ name: 'Laptop Dell XPS 13', quantity: 1, price: '4,999 zł' }],
    amount: '4,999 zł',
    status: 'ordered',
    date: '2024-01-15',
    shippingAddress: 'ul. Kwiatowa 12, 00-001 Warszawa',
    paymentMethod: 'Karta płatnicza'
  },
  {
    id: 'ORD-002',
    customer: {
      name: 'Anna Nowak',
      email: 'anna.nowak@email.com',
      id: 'CUST-002'
    },
    products: [{ name: 'iPhone 15 Pro', quantity: 1, price: '5,499 zł' }],
    amount: '5,499 zł',
    status: 'shipped',
    date: '2024-01-14',
    shippingAddress: 'ul. Słoneczna 8, 31-000 Kraków',
    paymentMethod: 'BLIK'
  },
  {
    id: 'ORD-003',
    customer: {
      name: 'Piotr Wiśniewski',
      email: 'piotr.wisniewski@email.com',
      id: 'CUST-003'
    },
    products: [
      { name: 'Klawiatura mechaniczna', quantity: 1, price: '299 zł' },
      { name: 'Mysz bezprzewodowa', quantity: 1, price: '150 zł' }
    ],
    amount: '449 zł',
    status: 'completed',
    date: '2024-01-13',
    shippingAddress: 'ul. Parkowa 5, 50-000 Wrocław',
    paymentMethod: 'Przelew bankowy'
  },
  {
    id: 'ORD-004',
    customer: {
      name: 'Maria Lewandowska',
      email: 'maria.lewandowska@email.com',
      id: 'CUST-004'
    },
    products: [{ name: 'Monitor 4K 27"', quantity: 1, price: '1,299 zł' }],
    amount: '1,299 zł',
    status: 'ordered',
    date: '2024-01-12',
    shippingAddress: 'ul. Długa 15, 80-000 Gdańsk',
    paymentMethod: 'PayPal'
  },
  {
    id: 'ORD-005',
    customer: {
      name: 'Tomasz Zieliński',
      email: 'tomasz.zielinski@email.com',
      id: 'CUST-005'
    },
    products: [
      { name: 'Słuchawki bezprzewodowe', quantity: 2, price: '199 zł' }
    ],
    amount: '398 zł',
    status: 'shipped',
    date: '2024-01-11',
    shippingAddress: 'ul. Zielona 3, 60-000 Poznań',
    paymentMethod: 'Karta płatnicza'
  },
  {
    id: 'ORD-006',
    customer: {
      name: 'Katarzyna Nowak',
      email: 'katarzyna.nowak@email.com',
      id: 'CUST-006'
    },
    products: [
      { name: 'Tablet Samsung Galaxy', quantity: 1, price: '1,599 zł' },
      { name: 'Etui ochronne', quantity: 1, price: '89 zł' }
    ],
    amount: '1,688 zł',
    status: 'completed',
    date: '2024-01-10',
    shippingAddress: 'ul. Miodowa 20, 10-000 Olsztyn',
    paymentMethod: 'BLIK'
  },
  {
    id: 'ORD-007',
    customer: {
      name: 'Michał Kowalczyk',
      email: 'michal.kowalczyk@email.com',
      id: 'CUST-007'
    },
    products: [
      { name: 'Smartwatch Apple Watch', quantity: 1, price: '1,899 zł' }
    ],
    amount: '1,899 zł',
    status: 'ordered',
    date: '2024-01-09',
    shippingAddress: 'ul. Różana 7, 40-000 Katowice',
    paymentMethod: 'Przelew bankowy'
  }
]
