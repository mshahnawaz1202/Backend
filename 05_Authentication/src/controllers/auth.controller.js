const userModel = require('../models/user.model')
const jwt  = require('jsonwebtoken')


async function register(req, res) {

    const { username, email, password } = req.body
    
    const isUserExists = await userModel.findOne({email})
    if(isUserExists){
        return res.status(409).json({
            message: "User with this email already exists"
        })
    }


    
    const user = await userModel.create({ username, email, password })  
    /** create token */
    const token = jwt.sign({
        id: user._id
    },process.env.JWT_SECRET)

    res.cookie("token",token) // saved token in cookies

    res.status(201).json({
        message : "User Succesfully Register!",
        user,
    })

    /** Problem in above code  is that user can make multiple accounts with same username and email which is not good 
     * so first we do changes in model and add unique in email and
     * then error handling in controller
    */




}





module.exports = { register };