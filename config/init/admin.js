import mongoose from 'mongoose'

import { config } from '../'
import logger from '../../lib/logger'

const Role = mongoose.model('Role')
const User = mongoose.model('User')

export default async () => {
  let role = await Role.findOne({ level: 'S' })
  let superAdmin = await User.findOne({email: config.superAdmin.email})

  if (!role) {
    role = new Role({
      title: 'SuperAdmin',
      level: 'S'
    })

    await role.save()
  }

  if (!superAdmin) {
    superAdmin = new User({
      name: 'Super Admin',
      email: config.superAdmin.email,
      password: config.superAdmin.password,
      role: role.id,
      enabled: true,
      avatarUrl: '/test',
      remark: 'System Super Admin'
    })

    await superAdmin.save()
    logger.warn('>>Init<< SuperAdmin Inited by default set')
  } else {
    logger.info('>>Init<< SuperAdmin exist')
  }
}
