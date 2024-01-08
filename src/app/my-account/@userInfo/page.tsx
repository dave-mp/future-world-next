import { Logout } from "app/components/my-account/Logout"
import { validateAccessToken } from "app/utils/auth/validateAccessToken"
import { redirect } from "next/navigation"

export default async function MyAccountPage() {
  const customer = await validateAccessToken()

  if (!customer) redirect("/")

  return (
    <div>
      <h2>Account info</h2>
      <section>
        <p>Nombre: {customer?.firstName}</p>
        <p>email: {customer?.email}</p>
      </section>
      <section>
        <Logout />
      </section>
    </div>
  )
}
