/**
 * INIT REACT CLIENT APP
 * Middleware to init react client with server render
 */

import express from 'express'
import path from 'path'
import compression from 'compression'
import logger from '../../lib/logger'

// For Develooment init
const addDevMiddlewares = (app, webpackConfig) => {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const compiler = webpack(webpackConfig)
  const middleware = webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    silent: true,
    stats: 'errors-only'
  })

  app.use(middleware)
  app.use(webpackHotMiddleware(compiler))

  const fs = middleware.fileSystem

  app.get('*', (req, res) => {
    fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
      if (err) {
        res.sendStatus(404)
      } else {
        res.send(file.toString())
      }
    })
  })
  logger.info('>>APP<< Complete init App and Routes for Un-production')
}

// For Porduction init
// TODO: To check and make everythings work :P
const addProdMiddlewares = (app, options) => {
  const publicPath = options.publicPath || '/'
  const outputPath = options.outputPath || path.resolve(process.cwd(), 'build')

  app.use(compression())
  app.use(publicPath, express.static(outputPath))

  app.get('*', (req, res) => res.sendFile(path.resolve(outputPath, 'index.html')))
}

export default (app) => {
  const isProd = process.env.NODE_ENV === 'production'

  if (isProd) {
    addProdMiddlewares(app, {
      outputPath: path.resolve(process.cwd(), 'build'),
      publicPath: '*'
    })
  } else {
    const webpackConfig = require('../webpack/webpack.dev.babel')
    addDevMiddlewares(app, webpackConfig)
  }

 /*
  *  __      __              .__            __     _______                  ____   ____________
  * /  \    /  \ ____   ____ |  |__ _____ _/  |_   \      \   ______  _  __ \   \ /   /\_____  \
  * \   \/\/   // __ \_/ ___\|  |  \\__  \\   __\  /   |   \ /  _ \ \/ \/ /  \   Y   /  /  ____/
  *  \        /\  ___/\  \___|   Y  \/ __ \|  |   /    |    (  <_> )     /    \     /  /       \
  *   \__/\  /  \___  >\___  >___|  (____  /__|   \____|__  /\____/ \/\_/      \___/   \_______ \
  *        \/       \/     \/     \/     \/               \/                                   \/
  */

  console.log('  __      __              .__            __     _______                  ____   ____________  ')
  console.log(' /  \\    /  \\ ____   ____ |  |__ _____ _/  |_   \\      \\   ______  _  __ \\   \\ /   /\\_____  \\')
  console.log(' \\   \\/\\/   // __ \\_/ ___\\|  |  \\\\__  \\\\   __\\  /   |   \\ /  _ \\ \\/ \\/ /  \\   Y   /  /  ____/')
  console.log('  \\        /\\  ___/\\  \\___|   Y  \\/ __ \\|  |   /    |    (  <_> )     /    \\     /  /       \\')
  console.log('   \\__/\\  /  \\___  >\\___  >___|  (____  /__|   \\____|__  /\\____/ \\/\\_/      \\___/   \\_______ \\')
  console.log('        \\/       \\/     \\/     \\/     \\/               \\/                                   \\/')

  logger.info('>>SERVICE<< init successfully')
  return app
}
