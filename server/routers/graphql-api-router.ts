import Router from 'koa-router'

import { jwtAuthenticateMiddleware } from '@things-factory/auth-base'
import { GraphqlLocalClient } from '../graphql-local-client'

const debug = require('debug')('things-factory:warehouse-partner-server:graphql-api-router')

export const router = new Router()

router.use(jwtAuthenticateMiddleware)

router.post('/api/:version/graphql', async (context, next) => {
  context.state.version = context.params.version

  const { user, domain, version } = context.state
  const { query, variables } = context.request.body

  debug('/api/:version/graphql', user, domain, version)

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
