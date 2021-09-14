const errorFactory = (name, status) =>
  class extends Error {
    constructor(...params){
      super(...params);
      this.name = name;
      this.status = status;
    }
  }

module.exports = {
  UnauthorizedError: errorFactory('UnauthorizedError', 401),
  ServerInternalError: errorFactory('ServerInternalError', 500),
  ForbiddenError: errorFactory('ForbiddenError', 403),
}