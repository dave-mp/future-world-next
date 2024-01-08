interface ErrorPageProps {
  error: Error
  reset: () => void
}

type ProductType = {
  id: string
  title: string
  description: string
  price: number
  image: string
  quantity: number
  handle: string
  tags: string
  maxQuantity: number
  gql_id: string
}

type CollectionType = {
  id: string
  title: string
  handle: string
}

type CartItem = {
  id: string
  title: string
  price: number
  quantity: number
  image: string
  merchandiseId: string
}

type OrderType = {
  orderNumber: string
}
