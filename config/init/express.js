import bodyParser from 'body-parser'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import cookieSession from 'cookie-session'
import csrf from 'csurf'
import express from 'express'
import session from 'express-session'
import methodOverride from 'method-override'

// import MongoStore from 'connect-mongo'
import flash from 'connect-flash'

import { config } from '../'
const MongoStore = require('connect-mongo')(session)

export default (app, passport) => {
  // Init static folder
  app.use(express.static('./app/public'))

  // Init compression middleware
  app.use(compression({
    threshold: 512
  }))

  // Init static files path
  app.use(express.static('../../app/public'))

  // Init bodyParser
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  // Init methodOverride
  app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method
      delete req.body._method
      return method
    }
  }))

  // Init bodyParser
  app.use(cookieParser())
  app.use(cookieSession({ secret: 'secret' }))
  app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'secret',
    store: new MongoStore({
      url: config.db,
      collection: 'sessions'
    })
  }))

  // Init passport authenticate
  app.use(passport.initialize())
  app.use(passport.session())

  // Init flash message
  app.use(flash())

  // TODO: non-production
  // app.use(csrf())
}
