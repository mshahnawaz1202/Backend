// pupose of this is to start the server

const app = require('./src/app')

// import app from './src/app'

const port = 3000

app.listen(port,() =>{
    console.log(`server is running on port ${port}`);
    
})






