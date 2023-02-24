const jwt = require("jsonwebtoken");
require("dotenv").config()

const verifyJWT = async (req, res, next) => {
    // Check for auth header
    const authHeader = req.headers["authorization"];
    if (!authHeader) return res.sendStatus(401);

    // Get token from header
    const token = authHeader.split(" ")[1];

    // Verify the token
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) return res.sendStatus(403); // Forbidden / Invalid Token
        req.user = decoded._id;
        next();
    });
};

module.exports = verifyJWT;
