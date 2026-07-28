const express = require("express");


const app = express()






app.get('/',(req,res) =>{
    res.status(200).json({
        message:"Test Message"
    })

})

app.post("/register",(req,res) => {
    const{username,email,password} = req.body
    
})



module.exports = app