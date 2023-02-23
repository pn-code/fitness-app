const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

const handleRefreshToken = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    const refreshToken = cookies.jwt;

    const findUserByToken = await User.findOne({ refreshToken: refreshToken });

    // If user with token is not found...
    if (!findUserByToken) return res.sendStatus(403); // Unauthorized

    // If user with matching token is found...
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if (err || findUserByToken._id.toString() !== decoded._id)
                return res.sendStatus(403);
            const accessToken = jwt.sign(
                { _id: decoded._id },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: "1200s" }
            );
            res.json({
                _id: findUserByToken._id,
                firstName: findUserByToken.firstName,
                lastName: findUserByToken.lastName,
                email: findUserByToken.email,
                weights: findUserByToken.weights,
                calorieGoal: findUserByToken.calorieGoal,
                accessToken,
            });
        }
    );
};

module.exports = { handleRefreshToken };
