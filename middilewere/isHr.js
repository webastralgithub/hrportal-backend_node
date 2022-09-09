const jwt = require("jsonwebtoken")

module.exports = {
    isHr: (req, res, next) => {
        const token = req.header("token")
        if (!token) return res.status(401).json('Access Denied');
        const verified = jwt.verify(token, process.env.TOKEN_KEY)
        if (verified.roleType === "2") {
            next()
        } else {
            res.status(403).json("You are not allowed to access this route!!")
        }

    }
}