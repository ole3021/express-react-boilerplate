import mongoose from 'mongoose'
import { definitions } from '../../config'

const ROLE_LEVELS = Object.keys(definitions.role_levels)
const Schema = mongoose.Schema

const RoleSchema = new Schema({
  title: { type: String, required: 'Role\'s title should not empty', trim: true, unique: 'Role\'s title already exist' },
  level: { type: String, enum: ROLE_LEVELS, required: 'Role\'s level must be set' },
  enabled: { type: Boolean, default: true }
}, {
  timestamps: true
})

mongoose.model('Role', RoleSchema)
