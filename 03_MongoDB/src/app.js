const express = require('express')
const noteModel = require('./models/notes.models')
const app = express()

app.use(express.json())



app.post('/notes', async (req, res) => {
    const data = req.body
    await noteModel.create({
        title: data.title,
        description: data.description
    })
    res.status(201).json({
        message: 'Note Created Successfully'
    })
})


app.get('/notes', async (req, res) => {


    /**
 * find() --> [{},{}] or []
 * findOne() --> {} or null
 */


    const notes = await noteModel.find() // find always returns an array

    // const notes = await noteModel.findOne({
    //     title : 'test_title_1'
    // })

    res.status(201).json({
        message: 'Notes Fetched Successfully!',
        notes: notes
    })
})


app.delete('/notes/:id', async (req, res) => {
    const id = req.params.id
    await noteModel.findOneAndDelete({
        _id : id
    })
    res.status(200).json({
        message: 'Notes Deleted Successfully!',
        
    })

})


app.patch('/notes/:id', async (req, res) => {
    const id = req.params.id
    const description = req.body.description
    await noteModel.findOneAndUpdate({
        _id : id
    },{
        description:description
    })
    res.status(200).json({
        message: 'Notes Updated Successfully!',
        
    })

})






module.exports = app