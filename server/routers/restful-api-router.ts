import Router from 'koa-router'
import { jwtAccessTokenMiddleware } from '@things-factory/oauth2-base'
import { GraphqlLocalClient } from '../graphql-local-client'

const debug = require('debug')('things-factory:partner-server:restful-api-router')

export const router = new Router()

router.use(jwtAccessTokenMiddleware)

router.use(async (context, next) => {
  context.state.version = context.params.version
  context.state.client = GraphqlLocalClient.client

  const { user, domain, version } = context.state

  debug('context.state', user, domain, version)

  if (!user) {
    context.status = 401
    context.body = {
      success: false,
      message: 'user not found'
    }
    return
  }

  await next()
})
