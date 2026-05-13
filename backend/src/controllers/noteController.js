const Note = require("../models/notes.model")

// create a note
async function createNote(req, res){
    try{
        const newNote = new Note(req.body)
        const savedNote = await newNote.save();
        res.status(201).json({ message: "Success", savedNote })
    }
    catch( error ){
        res.status(400).json({ message: error.message });
    }
}

// Get all notes
async function getAllNotes(req, res){
    try{
        const notes = await Note.find();
        res.status(200).json({notes})
    }
    catch( error ){
        res.status(500).json({ message: error.message });
    }
}

// Update notes
async function updateNotes(req, res){
    try{
        const id = req.params.id;
        const updateData = req.body;
        const updatedNote = await Note.findByIdAndUpdate(id, updateData, {new : true});
        res.status(200).json(updatedNote)
    }
    catch( error ){
        res.status(400).json({ message: error.message });
    }
}

// delete note
async function deleteNote(req,res){
    try{
        await Note.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Note deleted successfully" });
    }
    catch(err){
        res.status(500).json({ message: err.message });
    }
}


module.exports = {createNote, getAllNotes, updateNotes, deleteNote}