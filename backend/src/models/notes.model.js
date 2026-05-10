const mongoose = require("mongoose")

const notesSchema = new mongoose.Schema({
    title : String,
    link : String,
    desc : String
})

module.exports = mongoose.model("notes", notesSchema)