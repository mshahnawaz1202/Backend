// purpose of this file is mainly to create a server


const express = require('express')
app = express()

/**
 * one note is like this
note = {
    title: 'my first note',
    description : 'this is my first note'
}

multiple notes stored in an array
const notes = [
    note1,note2,note3
]

*/

app.use(express.json()) // a middleware 

const notes = []

app.post('/notes', (req,res)=>{
    console.log(req.body);
    notes.push(req.body)

    res.status(201).json({
        message : 'Note Created Successfully!!'
    })

    
})


app.get('/notes',(req,res) => {
    res.status(200).json({
        message:'Notes fetch succesfully!',
        notes:notes 
    })
})

module.exports = app



