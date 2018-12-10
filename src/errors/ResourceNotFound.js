/**
 * Resource not found
 */
export default class ResourceNotFound extends Error {
  constructor(...args) {
    super(...args)
    this.name = 'ResourceNotFound'
    this.errorCode = 400
    this.errorMessage = 'resource-not-found'
    this.message = args[0] || 'Resource not found'
    Error.captureStackTrace(this, ResourceNotFound)
  }
}
