const express = require("express");
const validationRules = require("./middlewares/validator.middleware")

const app = express()



app.use(express.json());


app.get('/', (req, res) => {
    res.status(200).json({
        message: "Test Message"
    })

})

app.post("/register", validationRules.registerUserValidationResult, (req, res) => {
    const { username, email, password } = req.body

    res.status(200).json({
        message: "User Registered Successfully!",
        user: { username, email }
    })

})



module.exports = app