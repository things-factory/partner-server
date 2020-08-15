import Router from 'koa-router'
import { jwtAuthenticateMiddleware } from '@things-factory/auth-base'

const debug = require('debug')('things-factory:oauth2-base:api-router')

export const apiRouter = new Router()

apiRouter.post('/api/:version/graphql', jwtAuthenticateMiddleware, async (context, next) => {
  const { user, domain } = context.state

  debug('/api/:version/graphql', user, domain)

  context.body = {
    result: 'API called'
  }
})
