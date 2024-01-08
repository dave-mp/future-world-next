import { MainProducts } from "app/components/home/MainProducts"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "✨ Future World",
  description: "Welcome to the Future World, an eCommerce from another century",
}

export default function Home() {
  return (
    <main>
      <MainProducts />
    </main>
  )
}
