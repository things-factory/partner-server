import Router from 'koa-router'
import koaBodyParser from 'koa-bodyparser'
import { getRepository } from 'typeorm'
import { User } from '@things-factory/auth-base'

const debug = require('debug')('things-factory:partner-server:partner-signup-router')

export const partnerSignupRouter = new Router()
partnerSignupRouter.use(koaBodyParser())

partnerSignupRouter.post('/register', async (context, next) => {
  const { email } = context.request.body || {}

  /*
   * case new user, ...redirect to partner domain register
   * case exist user, ...redirect to partner domain home
   */
  const user: User = await getRepository(User).findOne(
    {
      email
    },
    {
      relations: ['domain', 'domains', 'roles']
    }
  )

  debug('post:/register', email, user)

  if (user) {
    // TODO define common function in context : redirect to subdomain eg) context.routeToSubdomain(...)
    context.redirect(`/domain/${user.domain.subdomain}/partner-home`)
  } else {
    context.redirect(`/partner-register?email=${email}`)
  }
})
