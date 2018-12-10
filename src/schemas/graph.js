import Joi from 'joi'
import { options } from './validations'

export default {
  get: {
    options,
    params: {
      id: Joi.string().regex(/^[0-8]{1}$/)
    }
  }
}
