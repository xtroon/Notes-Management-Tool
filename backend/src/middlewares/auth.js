const { verifyToken } = require("../utils/jwt")

const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization

        if (!authHeader) {
            return res.status(401).json({
                success: false,
                message: "No token provided",
            })
        }

        const token = authHeader.split(" ")[1]
        const verified = verifyToken(token)

        if (!verified.success) {
            return res.status(401).json({
                success: false,
                message: "Invalid token",
            })
        }

        req.user = verified.decoded
        next()
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

module.exports = authMiddleware