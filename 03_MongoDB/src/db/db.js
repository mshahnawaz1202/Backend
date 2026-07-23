const mongoose = require('mongoose')

async function connectDB() {

    await mongoose.connect("mongodb+srv://shah:WzdcQZcYfzjKyii9@backend.7q3ilbf.mongodb.net/notesdb") // .net/database => database is db name
    console.log('Connected To DB');

    

    
}



module.exports = connectDB