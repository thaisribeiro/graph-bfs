/**
 * Resource already exists
 */
export default class ResourceAlreadyExists extends Error {
  constructor(...args) {
    super(...args)
    this.name = 'ResourceAlreadyExists'
    this.errorCode = 409
    this.errorMessage = 'resource-exists'
    this.message = args[0] || 'Resource already Exists'
    Error.captureStackTrace(this, ResourceAlreadyExists)
  }
}
