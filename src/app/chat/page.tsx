import { Chat } from "app/components/chat"
import { getProducts } from "app/services/shopify/products"
import { createAgent } from "app/utils/openai/createAgent"

export default async function ChatPage() {
  const products = await getProducts()
  const productTitles = products.map((p) => p.title).join("\n")
  const agent = createAgent(productTitles)

  return <Chat agent={agent} />
}
