/**
 * Joi Errors validate
 */
export default class JoiError extends Error {
  constructor(...args) {
    super(...args)
    this.name = 'JoiError'
    this.errorCode = 400
    this.errorMessage = 'joi-error'
    this.message = args[0] || 'Joi Error'
    Error.captureStackTrace(this, JoiError)
  }
}
