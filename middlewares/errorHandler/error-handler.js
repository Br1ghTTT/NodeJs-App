class ServerError extends Error {
    // need to add object to prevent input like this : ServerError: [object Object]
    constructor({message, statusCode}) {
        super(message, statusCode);
        this.message = message;
        this.statusCode = statusCode;
    };
}
global.ServerError = ServerError;

module.exports = ServerError;