/**
 * CONFIG COMBINE MODULE
 * Exports Configs simpler with commbined all configs together
 */

import development from './env/development'
import test from './env/test'
import production from './env/production'
import * as defs from './definitions'

const defaults = {}

export const config = {
  development: Object.assign(defaults, development),
  test: Object.assign(defaults, test),
  production: Object.assign(defaults, production)
}[process.env.NODE_ENV || 'development']

export const definitions = defs
