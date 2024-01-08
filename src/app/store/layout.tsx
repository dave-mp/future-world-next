import { getAllCollections } from "app/services/shopify/collections"
import Link from "next/link"
import { ChatLink } from "app/components/store/ChatLink"
import styles from "./StoreLayout.module.sass"

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const collections = await getAllCollections()

  return (
    <main className={styles.StoreLayout}>
      <h1>Explore</h1>
      <nav>
        <ul className={styles.StoreLayout__list}>
          <Link href={`/store`} className={styles.StoreLayout__chip}>
            Everything
          </Link>
          {collections?.map((collection) => (
            <Link
              key={collection.id}
              href={`/store/${collection.handle}`}
              className={styles.StoreLayout__chip}
            >
              {collection.title}
            </Link>
          ))}
        </ul>
        <ChatLink />
      </nav>
      {children}
    </main>
  )
}
