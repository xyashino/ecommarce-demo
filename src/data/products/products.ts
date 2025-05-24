export interface Product {
  id: string
  name: string
  price: number
  description: string
  imageUrl: string
  category: string
  stock: number
  createdAt: string
  updatedAt: string
}

export const products: Product[] = [
  {
    id: 'PROD-001',
    name: 'Laptop Dell XPS 13',
    price: 4999,
    description:
      'Wysokiej jakości laptop ultrabook z procesorem Intel Core i7 i 16GB RAM',
    imageUrl:
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=300&fit=crop',
    category: 'electronics',
    stock: 15,
    createdAt: '2024-01-10T10:00:00Z',
    updatedAt: '2024-01-10T10:00:00Z'
  },
  {
    id: 'PROD-002',
    name: 'iPhone 15 Pro',
    price: 5499,
    description: 'Najnowszy iPhone z układem A17 Pro i aparatem 48MP',
    imageUrl:
      'https://images.unsplash.com/photo-1592286385-3b0157d1ba83?w=500&h=300&fit=crop',
    category: 'electronics',
    stock: 8,
    createdAt: '2024-01-08T14:30:00Z',
    updatedAt: '2024-01-08T14:30:00Z'
  },
  {
    id: 'PROD-003',
    name: 'Klawiatura mechaniczna',
    price: 299,
    description: 'Mechaniczna klawiatura dla graczy z podświetleniem RGB',
    imageUrl:
      'https://images.unsplash.com/photo-1541140134513-85a161dc4a00?w=500&h=300&fit=crop',
    category: 'accessories',
    stock: 25,
    createdAt: '2024-01-05T09:15:00Z',
    updatedAt: '2024-01-05T09:15:00Z'
  },
  {
    id: 'PROD-004',
    name: 'Monitor 4K 27"',
    price: 1299,
    description: 'Monitor 4K IPS 27 cali idealny do pracy i multimediów',
    imageUrl:
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&h=300&fit=crop',
    category: 'electronics',
    stock: 12,
    createdAt: '2024-01-03T16:45:00Z',
    updatedAt: '2024-01-03T16:45:00Z'
  },
  {
    id: 'PROD-005',
    name: 'Słuchawki bezprzewodowe',
    price: 199,
    description: 'Bezprzewodowe słuchawki z aktywną redukcją szumów',
    imageUrl:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=300&fit=crop',
    category: 'accessories',
    stock: 30,
    createdAt: '2024-01-01T12:00:00Z',
    updatedAt: '2024-01-01T12:00:00Z'
  },
  {
    id: 'PROD-006',
    name: 'Tablet Samsung Galaxy',
    price: 1599,
    description: 'Tablet z ekranem 11 cali i rysikiem S Pen w zestawie',
    imageUrl:
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=300&fit=crop',
    category: 'electronics',
    stock: 7,
    createdAt: '2023-12-28T08:30:00Z',
    updatedAt: '2023-12-28T08:30:00Z'
  }
]
