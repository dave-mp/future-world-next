import { SHOPIFY_HOSTNAME } from "app/config/env"

const BASE_API_PATH = "admin/api/2023-10"

export const shopifyUrls = {
  products: {
    all: `${SHOPIFY_HOSTNAME}/${BASE_API_PATH}/products.json`,
    mainProducts: `${SHOPIFY_HOSTNAME}/${BASE_API_PATH}/collections/302351712435/products.json`,
  },
  collections: {
    all: `${SHOPIFY_HOSTNAME}/${BASE_API_PATH}/smart_collections.json`,
    products: (collectionId: string) =>
      `${SHOPIFY_HOSTNAME}/${BASE_API_PATH}/collections/${collectionId}/products.json`,
  },
}
