import gql from 'graphql-tag'
import { router } from '../../restful-api-router'

router.get('/unstable/orders', async (context, next) => {
  const { client } = context.state

  context.body = {
    result: (
      await client.query({
        query: gql`
          query {
            users {
              items {
                name
                status
              }
              total
            }
          }
        `,
        variables: {},
        context
      } as any)
    ).data
  }
})
