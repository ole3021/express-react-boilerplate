import Express from 'express'
import logger from './lib/logger'

const app = module.exports = new Express()

require('./config/routes')(app)

app.listen(4020)
logger.info('servser started at 4020')
