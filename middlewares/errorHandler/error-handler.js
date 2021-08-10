class ServerError extends Error {
    // or {message, statusCode}
    constructor(message, statusCode) {
        super(message, statusCode);
        this.message = message;
        this.statusCode = statusCode;
    };
}
global.ServerError = ServerError;

module.exports = ServerError;