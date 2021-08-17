const express = require('express')

const router = express.Router();
const { body, validationResult } = require('express-validator');
const RequestValidatioError = require('../errors/request-validation-error');
const RequestDatabaseConnectionError = require('../errors/database-connection-error');

// const {RequestValidationError} = require('../errors/request-validation-error')

router.post('/api/users/signup', body('username').isEmail(),
// password must be at least 5 chars long
body('password').isLength({ min: 8 }), (req,res) => {
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new RequestValidatioError(errors.array());
    }
    /*
    //Testing Generic Error 
    // throw new Error();
    */
   
    //Assuming DB is always down
    throw new RequestDatabaseConnectionError('Unable to access LDB');
    res.send('Creating user');
    
});

module.exports = router;