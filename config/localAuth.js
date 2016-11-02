import mongoose from 'mongoose'
import { Strategy } from 'passport-local'

const User = mongoose.model('User')

export default new Strategy({
  usernameField: 'email',
  passwordField: 'password'
}, async (email, password, done) => {
  const options = {
    criteria: { email: email, enabled: true },
    select: 'name email hashedPassword salt enabled avatarUrl remark'
  }

  const user = await User.load(options)

  if (!user) {
    return done(null, false, {message: 'No user exist'})
  }

  if (!user.authenticate(password)) {
    return done(null, false, {message: 'PassWord not match'})
  }

  return done(null, user)
})
