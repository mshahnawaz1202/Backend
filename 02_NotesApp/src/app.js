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
/** POST */
app.post('/notes', (req,res)=>{
    console.log(req.body);
    notes.push(req.body)

    res.status(201).json({
        message : 'Note Created Successfully!!'
    })

    
})

/** GET */
app.get('/notes',(req,res) => {
    res.status(200).json({
        message:'Notes fetch succesfully!',
        notes:notes 
    })
})


/** DELETE  /notes/:index  (indexing start from 0 for array) */
app.delete('/notes/:index',(req,res) => {
    const index  = req.params.index
    console.log('Index to be deleted : ',index);
    
    delete notes[index]
    res.status(200).json({
        message : 'Note deleted succesfully!'
    })

})




/** PATCH  /notes/:index  (indexing start from 0 for array) */
app.patch('/notes/:index',(req,res) => {
    const index  = req.params.index
    console.log('Index to be updated : ',index);

    const description  = req.body.description

    notes[index].description = description
    
   
    res.status(200).json({
        message : 'Note updated succesfully!'
    })

})



module.exports = app



