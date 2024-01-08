"use client"
import { SyntheticEvent, useState } from "react"
import { FaCartShopping } from "react-icons/fa6"
import styles from "./ProductViewItemsOrder.module.sass"
import { useShoppingCart } from "app/hooks/useShoppingCart"

interface ProductViewItemsOrderProps {
  product: ProductType
}

export const ProductViewItemsOrder = ({
  product: { maxQuantity, title, price, id, image, gql_id },
}: ProductViewItemsOrderProps) => {
  const [quantity, setQuantity] = useState(1)
  const { addToShoppingCart } = useShoppingCart()

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault()
    addToShoppingCart({
      title,
      price,
      quantity,
      id,
      image,
      merchandiseId: gql_id,
    })
  }

  const handleSubtract = (event: SyntheticEvent) => {
    event.preventDefault()
    if (quantity === 1) return
    setQuantity(quantity - 1)
  }

  const handleAdd = (event: SyntheticEvent) => {
    event.preventDefault()
    if (quantity === maxQuantity) return
    setQuantity(quantity + 1)
  }

  return (
    <div className={styles.ProductViewItemsOrder}>
      <div className={styles.ProductViewItemsOrder__itemsCount}>
        <button onClick={handleSubtract}>-</button>
        <p>{quantity}</p>
        <button onClick={handleAdd}>+</button>
      </div>
      <form
        onSubmit={handleSubmit}
        className={styles.ProductViewItemsOrder__form}
      >
        <button className={styles.ProductViewItemsOrder__submit} type="submit">
          <FaCartShopping />
          <span>Add to cart</span>
        </button>
      </form>
    </div>
  )
}
