import { type Order } from '@/data/orders/orders'

export const OrderProductCell = (props: { products: Order['products'] }) => {
  const { products } = props
  if (products.length === 1) {
    return <span className="text-sm">{products[0].name}</span>
  }
  return (
    <span className="text-sm">
      {products[0].name}
      <span className="text-muted-foreground">
        {' '}
        (+{products.length - 1} więcej)
      </span>
    </span>
  )
}
