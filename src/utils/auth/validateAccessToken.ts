import { GraphQLClientSingleton } from "app/graphql"
import { customerName } from "app/graphql/queries/customerName"
import { cookies } from "next/headers"

export const validateAccessToken = async () => {
  const cookiesStore = cookies()
  const customerAccessToken = cookiesStore.get("accessToken")?.value

  if (!customerAccessToken) return

  const graphqlClient = GraphQLClientSingleton.getInstance().getClient()

  const { customer } = (await graphqlClient.request(customerName, {
    customerAccessToken,
  })) as any

  return customer
}
