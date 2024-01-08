import { ProductView } from "app/components/product/ProductView"
import { getProducts } from "app/services/shopify/products"
import { notFound, redirect } from "next/navigation"

interface ProductPageProps {
  searchParams: { id: string }
}

export async function generateMetadata({
  searchParams: { id },
}: ProductPageProps) {
  const searchResult = await getProducts(id)
  const product = searchResult.length ? searchResult[0] : null
  const { title, description, tags: keywords, image } = product!

  return {
    title,
    description,
    keywords,
    openGraph: {
      images: [image],
      title,
    },
  }
}

export default async function ProductPage({
  searchParams: { id },
}: ProductPageProps) {
  if (!id) redirect("/store")

  const searchResult = await getProducts(id)
  const product = searchResult.length ? searchResult[0] : null

  if (!product) notFound()

  return <ProductView product={product} />
}
