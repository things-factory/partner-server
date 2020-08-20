import Router from 'koa-router'
import { jwtAccessTokenMiddleware } from '@things-factory/oauth2-base'
import { GraphqlLocalClient } from '../../graphql-local-client'

const debug = require('debug')('things-factory:partner-server:graphql-api-router')

export const router = new Router()

router.use(jwtAccessTokenMiddleware)

router.post('/graphql', async (context, next) => {
  context.state.version = context.params.version

  const { user, domain, version } = context.state
  const { query, variables } = context.request.body

  debug('/graphql', user, domain, version)

  context.body = {
    result: (
      await GraphqlLocalClient.client.query({
        query,
        variables,
        context
      } as any)
    ).data
  }
})
