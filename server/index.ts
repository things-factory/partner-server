export * from './entities'
export * from './migrations'
export * from './graphql'

import './middlewares'
import './routes'

import { GraphqlLocalClient } from './routers'

process.on('bootstrap-module-start' as any, async ({ app, config, schema }: any) => {
  GraphqlLocalClient.init(schema)
})
