const mongoose = require('mongoose')

async function connectDb() {
    await mongoose.connect(process.env.DATABASE_URL)
    console.log('Connected to DB');
}

module.exports = connectDb










