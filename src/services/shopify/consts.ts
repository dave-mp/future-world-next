import { SHOPIFY_ACCESS_TOKEN } from "app/config/env"

export const HEADERS = new Headers({
  "X-Shopify-Access-Token": SHOPIFY_ACCESS_TOKEN || "",
})
