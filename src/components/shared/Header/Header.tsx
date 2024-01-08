import dynamic from "next/dynamic"
import Link from "next/link"
import { validateAccessToken } from "app/utils/auth/validateAccessToken"
import { Loader } from "../Loader"
import styles from "./Header.module.sass"
import { NavItem } from "./NavItem"

const NoSSRShoppingCart = dynamic(() => import("../ShoppingCart"), {
  ssr: false,
  loading: () => <Loader size="little" />,
})

export const Header = async () => {
  const customer = await validateAccessToken()

  return (
    <header className={styles.Header}>
      <nav>
        <ul className={styles.Header__list}>
          <NavItem href="/" label="Home" paths={["/"]} />
          <NavItem
            href="/store"
            label="Store"
            paths={["/store", "/product", "/chat"]}
          />
        </ul>
      </nav>
      <nav className={styles.Header__user}>
        {customer?.firstName ? (
          <NavItem
            href="/my-account"
            label={`Hello, ${customer.firstName}!`}
            paths={["/my-account"]}
          />
        ) : (
          <NavItem href="/login" label="Login" paths={["/login"]} />
        )}
        <NoSSRShoppingCart />
      </nav>
    </header>
  )
}
