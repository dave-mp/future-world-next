import dynamic from "next/dynamic"
import Link from "next/link"
import { validateAccessToken } from "app/utils/auth/validateAccessToken"
import styles from "./Header.module.sass"
import { Loader } from "../Loader"

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
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/store">Store</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.Header__user}>
        {customer?.firstName ? (
          <Link href="/my-account">
            <p>Hello, {customer.firstName}!</p>
          </Link>
        ) : (
          <Link href="/login">Login</Link>
        )}
        <NoSSRShoppingCart />
      </div>
    </header>
  )
}
