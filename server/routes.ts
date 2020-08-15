import { apiRouter } from './routers/api-router'

process.on('bootstrap-module-history-fallback' as any, (app, fallbackOption) => {
  var paths = ['api']
  fallbackOption.whiteList.push(`^\/(${paths.join('|')})($|[/?#])`)
})

process.on('bootstrap-module-route' as any, (app, routes) => {
  app.use(apiRouter.routes())
})
