import { restfulApiRouter, graphqlApiRouter } from './routers/api'
import { partnerSignupRouter } from './routers/partner'

const debug = require('debug')('things-factory:partner-server:routes')

process.on('bootstrap-module-history-fallback' as any, (app, fallbackOption) => {
  var paths = ['api', 'partner']
  fallbackOption.whiteList.push(`^\/(${paths.join('|')})($|[/?#])`)
})

process.on('bootstrap-module-global-public-route' as any, (app, globalPublicRouter) => {
  /* domain signup process nested-router based on global-public-router */
  globalPublicRouter.use('/partner', partnerSignupRouter.routes(), partnerSignupRouter.allowedMethods())
})

process.on('bootstrap-module-domain-public-route' as any, (app, domainPublicRouter) => {
  /* API nested-routers authenticationg with jwtAuthenticateMiddleware based on domain-public-router */
  domainPublicRouter.use('/api', restfulApiRouter.routes(), restfulApiRouter.allowedMethods())
  domainPublicRouter.use('/api/:version', graphqlApiRouter.routes(), graphqlApiRouter.allowedMethods())
})
