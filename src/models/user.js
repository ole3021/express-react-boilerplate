import crypto from 'crypto'
import mongoose from 'mongoose'

const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: { type: String, required: 'User name should not be empty', trim: true },
  email: { type: String, required: 'User email should not be empty', unique: 'Email already exists', trim: true },
  hashedPassword: { type: String, requried: 'User password shoudl not be empty' },
  salt: { type: String, required: 'salt not exist' },
  role: { type: Schema.ObjectId, ref: 'Role', required: 'User role should not be empty' },
  enabled: { type: Boolean, default: true },
  avatarUrl: { type: String },
  remark: { type: String }
}, {
  timestamps: true
})

UserSchema.pre('save', (next) => {
  next()
})

UserSchema
  .virtual('password')
  .set(function (password) {
    this._password = password
    this.salt = this.makeSalt()
    this.hashedPassword = this.encryptPassword(password)
  })
  .get(function () {
    return this._password
  })

UserSchema.methods = {
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.hashedPassword
  },
  makeSalt: () => crypto.randomBytes(128).toString('base64'),
  encryptPassword: function (password) {
    if (!password) return ''
    try {
      const pass = crypto
        .createHmac('sha512', this.salt)
        .update(password)
        .digest('hex')
      return pass
    } catch (e) {
      return ''
    }
  }
}

UserSchema.statics = {
  load: function (options) {
    options.select = options.select || 'name email enabled avatarUrl remark'
    return this.findOne(options.criteria)
      .select(options.select)
      .populate('role')
  }
}

mongoose.model('User', UserSchema)
