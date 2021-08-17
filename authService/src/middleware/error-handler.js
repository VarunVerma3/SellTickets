var express = require('express')
const RequestValidatioError = require('../errors/request-validation-error');

const RequestDatabaseConnectionError = require('../errors/database-connection-error');

const body = {
  'errors' : [{
    'message' : 'something Went wrong'
  }]
}

let status = 400;

const  errorHandler =  (err,req, res, next)  => {
    // console.log('LOGGED'); 
    if(err instanceof RequestValidatioError){
      body.errors = err.serializeError();
      status = err.statusCode;
    }

    if(err instanceof RequestDatabaseConnectionError){
      body.errors =err.serializeError();
      status = err.statusCode;
    }
    res.status(status).send(body);
    next()
  }

module.exports = errorHandler;