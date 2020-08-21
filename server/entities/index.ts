// const glob = require('glob')
// const path = require('path')

// export var entities = []

// glob.sync(path.resolve(__dirname, '.', '**', '*.*')).forEach(function (file) {
//   if (file.indexOf('index.') !== -1) return
//   entities = entities.concat(Object.values(require(path.resolve(file))) || [])
// })

import { Partner } from './partner'

export const entities = [Partner]

/* export all entities below */
export { Partner }
