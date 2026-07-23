require('dotenv').config();
const app = require('./src/app')
const connectDB = require('./src/db/db')
const port = 3000


app.listen(port,(req,res) => {
    console.log(`Server is running on port ${port}`);
    
})

connectDB()





