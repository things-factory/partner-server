export * from './entities'
export * from './migrations'
export * from './graphql'

import './middlewares'
import './routes'

import { GraphqlLocalClient } from './graphql-local-client'

process.on('bootstrap-module-start' as any, async ({ app, config, schema }: any) => {
  GraphqlLocalClient.init(schema)
})
