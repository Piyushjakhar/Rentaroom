const { validate, ValidationError, Joi } = require('express-validation')
const genFunctions = require('../utility/genFunctions')
const status_code = require('../utility/statusCodes');

const loginValidation = (req, res, next) => {
    const body = req.body;

        const schema = Joi.object({
            phone: Joi.string().min(10).max(10).required(),
            password: Joi.string().min(6).max(12).required()
        })
        const {error, value} = schema.validate(body);
        if (error == null) {
            return next();
        }
        else {
            genFunctions.sendResponse(error.details[0].message, status_code.HTTP_404_BAD_REQUEST, req, res, null);
        }
        
    
}

const registerValidation = (req, res, next) => {
        const body = req.body;
        const schema =  Joi.object({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            phone: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
            password: Joi.string().min(6).max(12).required()
        })
        const {error, value} = schema.validate(body);
        if (error == null) {
            return next();
        }
        else {
            // res.json(error);
            genFunctions.sendResponse(error.details[0].message, status_code.HTTP_404_BAD_REQUEST, req, res, null);
        }
}

module.exports = {loginValidation, registerValidation}