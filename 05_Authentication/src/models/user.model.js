const mongoos = require('mongoose')

const userSchema = new mongoos.Schema({
    username:String,
    email:String,
    password:String,

})


const userModel = mongoos.model("User",userSchema)

module.exports = userModel













