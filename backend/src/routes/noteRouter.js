const express  = require("express")
const noteController = require("../controllers/noteController")

// only logge user see
const authMiddleware = require("../middlewares/auth");


const router = express.Router();

// Apply middleware to all note routes
router.use(authMiddleware); 

// else write router.get("/", authMiddleware, noteController.getAllNotes) // get all notes

router.post("/", noteController.createNote) // create note
router.get("/", noteController.getAllNotes) // get all notes
router.put("/:id", noteController.updateNotes) // get all notes
router.delete("/:id", noteController.deleteNote) // get all notes

module.exports = router