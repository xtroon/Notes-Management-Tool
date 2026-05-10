const express = require("express")
const app = express()

//import routes
const noteRoutes = require("./routes/noteRouter")

app.use(express.json())

// routes here
app.use("/api/notes", noteRoutes);

module.exports = app