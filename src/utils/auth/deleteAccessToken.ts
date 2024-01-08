import { GraphQLClientSingleton } from "app/graphql"
import { customerAccessTokenDeleteMutation } from "app/graphql/mutations/customerAccessTokenDelete"
import { cookies } from "next/headers"

export const deleteAccessToken = async () => {
  const cookiesStore = cookies()
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
  const customerAccessToken = cookiesStore.get("accessToken")?.value

  await graphqlClient.request(customerAccessTokenDeleteMutation, {
    customerAccessToken,
  })

  cookiesStore.delete("accessToken")
}
