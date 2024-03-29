import Image from "next/image"
import Link from "next/link"
import { getMainProducts } from "app/services/shopify/products"
import styles from "./MainProducts.module.sass"

export const MainProducts = async () => {
  const products = await getMainProducts()

  return (
    <section className={styles.MainProducts}>
      <h3>✨ New products released!</h3>
      <div className={styles.MainProducts__grid}>
        {products?.map((product) => {
          return (
            <Link
              href={`/product/${product.handle}?id=${product.id}`}
              key={product.id}
            >
              <p>{product.title}</p>
              <Image
                src={product.image}
                fill
                alt={product.title}
                loading="eager"
              />
            </Link>
          )
        })}
      </div>
    </section>
  )
}
