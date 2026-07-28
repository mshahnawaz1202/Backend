// const {body,param,query,check} = require('express-validator')
const { body, validationResult } = require('express-validator')

async function validateResult(req, res, next) {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }

    next()

}

const registerUserValidationResult = [
    body("username")
        .isString()
        .withMessage("username must be string")
        .isLength({ min: 3, max: 30 })
        .withMessage("Username must be in between 3 and 30 characters"),


    body("email")
        .isEmail()
        .withMessage("Invalid Email"),

    body("password")
        .isLength({ min: 6 })
        .withMessage("Password must be atleast 6 charaters"),
    validateResult

]





module.exports = { registerUserValidationResult }