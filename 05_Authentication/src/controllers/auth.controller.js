const userModel = require('../models/user.model')
const jwt  = require('jsonwebtoken')


async function register(req, res) {

    const { username, email, password } = req.body
    const user = await userModel.create({ username, email, password })  

    const token = jwt.sign({
        id: user._id
    },process.env.JWT_SECRET)

    res.cookie("token",token)

    res.status(201).json({
        message : "User Succesfully Register!",
        user,
    })

    /** Problem in above code  is that user can make multiple accounts with same username and email which is not good 
     * so first we do changes in model and add unique in email
    */




}





module.exports = { register };