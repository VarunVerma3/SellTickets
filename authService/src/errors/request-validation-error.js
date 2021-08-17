const ValidationError  = require("express-validator") ;
const express = require('express')

const router = express.Router();

class RequestValidatioError extends Error{
    constructor(errors){ //ValidationError[]
        super();
        this.errors = errors;
        this.statusCode  = 400;
        console.log(this.errors)
        Object.setPrototypeOf(this, RequestValidatioError.prototype);
    }

    serializeError() {
        return this.errors.map(error => { return {message: error.msg, field: error.param}});
    }
}


module.exports = RequestValidatioError;