const express = require('express')

const app = express()

// app.listen(3000,() => {
//     console.log('server is running on port 3000');
    
// })

app.get("/",(req,res) => {
    res.send('Hello from Backend!')
})

app.get("/about",(req,res) => {
    res.send('Hello from Backend!\n About Page')
})

app.listen(3000)


