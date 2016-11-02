/**
 * INIT PROJECT REQUIRED MODELS
 * Mongodb models are required before all other part.
 * and make load models easily
 */

import fs from 'fs'
import { join } from 'path'

import logger from '../../lib/logger'

const modelsPath = join(__dirname, '../../src/models')

export default fs.readdirSync(modelsPath)
  .forEach((file) => {
    if (~file.indexOf('.js')) {
      logger.info(`>>MODEL<< Inited by file ${file}`)
      require(join(modelsPath, file))
    }
  })
