import { redirect } from "next/navigation"
import { validateAccessToken } from "app/utils/auth/validateAccessToken"
import { LoginForm } from "app/components/login/LoginForm"

export default async function LoginPage() {
  const customer = await validateAccessToken()

  if (customer) return redirect("/store")

  return <LoginForm />
}
