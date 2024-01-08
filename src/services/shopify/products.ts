import { shopifyUrls } from "./urls"
import { HEADERS } from "./consts"

export const getProducts = async (
  productId?: string
): Promise<ProductType[]> => {
  try {
    const apiUrl =
      shopifyUrls.products.all + (productId ? `?ids=${productId}` : "")
    const response = await fetch(apiUrl, {
      headers: HEADERS,
    })
    const { products } = await response.json()

    const transformedProducts: ProductType[] = products.map((product: any) => {
      const { admin_graphql_api_id, price, inventory_quantity } =
        product.variants[0]

      return {
        id: product.id,
        gql_id: admin_graphql_api_id,
        title: product.title,
        description: product.body_html,
        price,
        image: product.images[0].src,
        quantity: inventory_quantity,
        handle: product.handle,
        tags: product.tags,
      }
    })
    return transformedProducts
  } catch (error) {
    console.error(error)
  }
  return []
}

export const getMainProducts = async (): Promise<ProductType[]> => {
  const response = await fetch(shopifyUrls.products.mainProducts, {
    headers: HEADERS,
    cache: "no-cache",
  })

  const { products } = await response.json()

  return products ?? []
}
