const express = require('express')

const router = express.Router();

class RequestDatabaseConnectionError extends Error{
    constructor(errors){ //ValidationError[]
        super();
        console.log('DB ERROR' ,errors)
        
        this.statusCode = 500;
        this.reason = "Something wrong with Database";
        Object.setPrototypeOf(this, RequestDatabaseConnectionError.prototype);
    }

    serializeError() {
        return [{'message' : this.reason}];
    }
}




module.exports = RequestDatabaseConnectionError;