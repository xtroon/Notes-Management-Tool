const express = require("express")
const cors = require("cors")
const app = express()

//import routes
const noteRoutes = require("./routes/noteRouter")
const authRoutes = require("./routes/authRouter")

app.use(cors({
  origin: "*", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}))
app.use(express.json())

// routes here
app.use("/api/notes", noteRoutes);
app.use("/api/auth", authRoutes);

module.exports = app