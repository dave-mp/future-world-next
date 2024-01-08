import { ProductsWrapper } from "app/components/store/ProductsWrapper"
import {
  getAllCollections,
  getCollectionProducts,
} from "app/services/shopify/collections"
import { getProducts } from "app/services/shopify/products"

interface CategoriesProps {
  params: {
    categories: string
  }
}

export default async function Categories({
  params: { categories },
}: CategoriesProps) {
  const products = await getProducts()
  const collections = await getAllCollections()
  const selectedCollection = categories?.length
    ? collections?.find((collection) => collection.handle === categories[0])
    : null
  const productsByCollection = selectedCollection
    ? await getCollectionProducts(selectedCollection?.id!)
    : null

  return <ProductsWrapper products={productsByCollection ?? products ?? []} />
}
