import { restfulApiRouter, graphqlApiRouter } from './routers'

process.on('bootstrap-module-history-fallback' as any, (app, fallbackOption) => {
  var paths = ['api']
  fallbackOption.whiteList.push(`^\/(${paths.join('|')})($|[/?#])`)
})

process.on('bootstrap-module-domain-public-route' as any, (app, domainPublicRouter) => {
  domainPublicRouter.use('/api', restfulApiRouter.routes(), restfulApiRouter.allowedMethods())
  domainPublicRouter.use('/api/:version*', graphqlApiRouter.routes(), graphqlApiRouter.allowedMethods())
})
