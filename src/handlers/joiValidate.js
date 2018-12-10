import Joi from 'joi'
import JoiError from '../errors/JoiError'
import {
  mergeDeepLeft
} from 'ramda'

export default function joiValidate(validations) {
  const defaultOptions = {
    contextRequest: false,
    allowUnknownHeaders: true,
    allowUnknownBody: true,
    allowUnknownQuery: true,
    allowUnknownParams: true,
    allowUnknownCookies: true,
    status: 400,
    statusText: 'Bad Request'
  }
  const globalOptions = {}

  const unknownMap = {
    headers: 'allowUnknownHeaders',
    body: 'allowUnknownBody',
    query: 'allowUnknownQuery',
    params: 'allowUnknownParams',
    cookies: 'allowUnknownCookies'
  }

  async function validate(req, res, next) {
    const errors = []
    const options = mergeDeepLeft({}, validations.options, globalOptions, defaultOptions)

    await Object.keys(unknownMap).forEach((key) => {
      const allowUnknown = options[unknownMap[key]]
      const entireContext = options.contextRequest ? req : null
      if (validations[key]) valida(errors, req[key], validations[key], key, allowUnknown, entireContext)
    })

    if (errors.length === 0) return next()
    const message_error = errors.map((item, value) => {
      return item.messages[0]
    })

    next(new JoiError(message_error))
  }

  return validate
}

function valida(errObj, request, schema, location, allowUnknown, context) {
  if (!request || !schema) return

  const joiOptions = {
    context: context || request,
    allowUnknown: allowUnknown,
    abortEarly: false
  }

  Joi.validate(request, schema, joiOptions, function (errors, value) {
    if (!errors || errors.details.length === 0) return Object.assign(request, value)

    errors.details.forEach(error => {
      const errorExists = errObj.find((item) => {
        if (item && item.field === error.path && item.location === location) {
          item.messages.push(error.message)
          item.types.push(error.type)
          return item
        }
        return
      })

      if (!errorExists) {
        errObj.push({
          field: error.path,
          location: location,
          messages: [error.message],
          types: [error.type]
        })
      }
    })

  })

}
