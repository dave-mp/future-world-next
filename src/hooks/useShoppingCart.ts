import { create } from "zustand"

type Store = {
  shoppingCart: CartItem[]
  addToShoppingCart: (cartItem: CartItem) => void
  removeFromShoppingCart: (cartItem: CartItem) => void
}

const saveArrayToLocalStorage = (array: CartItem[]) => {
  localStorage.setItem("cart", JSON.stringify(array))
}

export const useShoppingCart = create<Store>()((set) => ({
  shoppingCart: (() => {
    if (typeof window === "undefined") {
      return []
    }

    const cart = localStorage.getItem("cart")
    if (cart) {
      return JSON.parse(cart)
    }

    return []
  })(),
  addToShoppingCart: (cartItem: CartItem) =>
    set((state) => {
      const currentCart = state.shoppingCart
      const itemExists = currentCart.find((item) => item.id === cartItem.id)
      const replaceExistingItem = currentCart.map((item) => {
        if (item.id === cartItem.id) {
          return cartItem
        }
        return item
      })

      if (itemExists) {
        saveArrayToLocalStorage(replaceExistingItem)
        return { shoppingCart: replaceExistingItem }
      }

      saveArrayToLocalStorage([...state.shoppingCart, cartItem])
      return { shoppingCart: [...state.shoppingCart, cartItem] }
    }),
  removeFromShoppingCart: (cartItem: CartItem) =>
    set((state) => {
      const currentCart = state.shoppingCart
      const newCart = currentCart.filter((item) => item.id !== cartItem.id)
      saveArrayToLocalStorage(newCart)
      return { shoppingCart: newCart }
    }),
}))
