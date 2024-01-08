"use client"
import { useState } from "react"
import { useShoppingCart } from "app/hooks/useShoppingCart"
import { FaCartShopping } from "react-icons/fa6"
import { ShoppingCartItem } from "./ShoppingCartItem/ShoppingCartItem"
import styles from "./ShoppingCart.module.sass"
import { handleCreateCart } from "app/actions"

export default function ShoppingCart() {
  const { shoppingCart } = useShoppingCart()
  const [isBuying, setIsBuying] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const hasItems = shoppingCart.length > 0

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleBuy = async () => {
    try {
      setIsBuying(true)
      const checkoutUrl = (await handleCreateCart(shoppingCart)) || "/store"

      if (!checkoutUrl) throw new Error("Error creating checkout")

      window.localStorage.removeItem("cart")
      window.location.href = checkoutUrl
    } catch (error) {
      console.log("🚀 ~ file: ShoppingCart.tsx:26 ~ handleBuy ~ error:", error)
    } finally {
      setIsBuying(false)
    }
  }

  return (
    <div className={styles.ShoppingCart}>
      {hasItems && (
        <span className={styles.ShoppingCart__counter}>
          {shoppingCart.length}
        </span>
      )}
      <button className={styles.ShoppingCart__cart} onClick={handleOpen}>
        <FaCartShopping />
      </button>
      {isOpen && hasItems && (
        <div className={styles.ShoppingCart__items}>
          {shoppingCart.map((item) => (
            <ShoppingCartItem key={item.id} item={item} />
          ))}
          <button
            className={styles.ShoppingCart__buyButton}
            disabled={isBuying}
            onClick={handleBuy}
          >
            Buy
          </button>
        </div>
      )}
    </div>
  )
}
