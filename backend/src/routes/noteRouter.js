const express  = require("express")
const noteController = require("../controllers/noteController")

const router = express.Router();

router.post("/", noteController.createNote) // create note
router.get("/", noteController.getAllNotes) // get all notes
router.put("/:id", noteController.updateNotes) // get all notes
router.delete("/:id", noteController.deleteNote) // get all notes

module.exports = router