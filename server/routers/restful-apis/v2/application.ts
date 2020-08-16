import gql from 'graphql-tag'
import { router } from '../../restful-api-router'

router.get('/api/v2/appBindings', async (context, next) => {
  const { client } = context.state

  context.body = {
    result: (
      await client.query({
        query: gql`
          query {
            appBindings {
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
