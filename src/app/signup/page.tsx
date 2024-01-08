import { redirect } from "next/navigation"
import { validateAccessToken } from "app/utils/auth/validateAccessToken"
import { NewAccountForm } from "app/components/signup/NewAccountForm"

export default async function NewAccountPage() {
  const customer = await validateAccessToken()

  if (customer) return redirect("/store")

  return <NewAccountForm />
}
