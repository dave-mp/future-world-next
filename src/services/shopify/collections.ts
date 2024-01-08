import { shopifyUrls } from "./urls"
import { HEADERS } from "./consts"

export const getAllCollections = async () => {
  try {
    const response = await fetch(shopifyUrls.collections.all, {
      headers: HEADERS,
    })
    const { smart_collections } = await response.json()
    return smart_collections as CollectionType[]
  } catch (error) {
    console.error(error)
  }
}

export const getCollectionProducts = async (collectionId: string) => {
  try {
    const response = await fetch(
      shopifyUrls.collections.products(collectionId),
      {
        headers: HEADERS,
      }
    )
    const { products } = await response.json()
    return products as ProductType[]
  } catch (error) {
    console.error(error)
  }
}
