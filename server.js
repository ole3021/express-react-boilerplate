import Promise from 'bluebird'
import Express from 'express'
import mongoose from 'mongoose'
import passport from 'passport'

// Bootstrap models for project
import './config/init/models'

import { config } from './config'
import logger from './lib/logger'
import * as utils from './lib/utils'

import initAdmin from './config/init/admin'
import initApp from './config/init/app'
import initExpress from './config/init/express'
import initPassport from './config/init/passport'
import initRoutes from './config/routes'

// Fix mongoose promise deprecation warning
mongoose.Promise = Promise

const port = process.env.PORT || 4020
const app = module.exports = new Express()

const startServer = () => {
  app.listen(port, '0.0.0.0')
  logger.info(`>>SERVER<< started on port: ${port}`)
}

const connectDB = () => {
  const options = {server: {socketOptions: {keepAlive: 1}}}
  return mongoose.connect(config.db, options).connection
}

initPassport(passport)
initExpress(app, passport)
initRoutes(app, passport)
initApp(app)

initAdmin().catch((err) => {
  logger.error('>>>> InitAdmin: \n' + utils.errMsg(err))
})

connectDB()
  .on('error', logger.error)
  .on('disconnected', connectDB)
  .once('open', startServer)
