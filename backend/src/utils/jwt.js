const jwt = require("jsonwebtoken")

// Generate Token
const generateToken = (id, email) => {
  return jwt.sign(
    {
      id,
      email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  )
}

// Verify Token
const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    )

    return {
      success: true,
      decoded,
    }
  } catch (error) {
    return {
      success: false,
      message: error.message,
    }
  }
}

module.exports = { generateToken, verifyToken }

