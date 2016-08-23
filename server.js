import Express from 'express'

import initApp from './config/initApp'
import logger from './lib/logger'

const app = module.exports = new Express()

initApp(app)

app.listen(4020)
logger.info('servser started at 4020')
