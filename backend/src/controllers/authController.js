const User = require("../models/user.model")
const bcrypt = require("bcryptjs")
const { generateToken } = require("../utils/jwt")

// SIGNUP functionality
async function signup(req, res) {
    try {
        const { name, email, password } = req.body

        // Validate input
        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" })
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email: email.toLowerCase() })
        if (existingUser) {
            return res.status(400).json({ success: false, message: "User already exists with this email" })
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10)

        // Create new user
        const newUser = new User({
            name,
            email: email.toLowerCase(),
            password: hashedPassword
        })

        const savedUser = await newUser.save()

        // Generate token
        const token = generateToken(savedUser._id, savedUser.email)

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            token,
            user: {
                _id: savedUser._id,
                name: savedUser.name,
                email: savedUser.email,
            },
        })
    } catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }
}

// LOGIN functionality
async function login(req, res) {
    try {
        const { email, password } = req.body

        // Validate input
        if (!email || !password) {
            return res.status(400).json({ success: false, message: "Email and password are required" })
        }

        // Find user by email with password field selected
        const user = await User.findOne({ email: email.toLowerCase() }).select("+password")

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" })
        }

        // Compare password
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            return res.status(401).json({ success: false, message: "Invalid password" })
        }

        // Generate token
        const token = generateToken(user._id, user.email)

        res.status(200).json({
            success: true,
            message: "Login successful",
            token,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
            },
        })
    } catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }
}

module.exports = { signup, login }