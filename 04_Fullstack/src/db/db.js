const mongoose = require('mongoose')

async function connectDb() {
    await mongoose.connect("mongodb+srv://shah:WzdcQZcYfzjKyii9@backend.7q3ilbf.mongodb.net/blog")
    console.log('Connected to DB');
}

module.exports = connectDb










