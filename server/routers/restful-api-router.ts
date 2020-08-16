import Router from 'koa-router'
import { jwtAuthenticateMiddleware } from '@things-factory/auth-base'
import { GraphqlLocalClient } from '../graphql-local-client'

const debug = require('debug')('things-factory:warehouse-partner-server:restful-api-router')

export const router = new Router()

router.use(jwtAuthenticateMiddleware)

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
