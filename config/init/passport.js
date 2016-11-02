/**
 * INIT AUTHENTICATION
 * Use Passport.js local to authenticate users
 */

import mongoose from 'mongoose'

import local from '../localAuth'
import logger from '../../lib/logger'

const User = mongoose.model('User')

export default (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    User.findOne({_id: id}, (err, user) => {
      done(err, user)
    })
  })

  passport.use(local)
  logger.info('>>AUTH<< Complete init authentication strategy')
}
