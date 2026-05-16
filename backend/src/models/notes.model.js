const mongoose = require("mongoose")

const notesSchema = new mongoose.Schema({
    title : String,
    link : String,
    desc : String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

module.exports = mongoose.model("notes", notesSchema)