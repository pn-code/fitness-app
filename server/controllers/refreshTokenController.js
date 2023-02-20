const jwt = require("jsonwebtoken");
const User = require("../models/User");

const handleRefreshToken = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);

    const refreshToken = cookies.jwt;

    const findUserByToken = await User.find({ refreshToken });

    // If user with token is not found...
    if (!findUserByToken) return res.sendStatus(403); // Unauthorized

    // If user with matching token is found...
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if (err || findUserByToken._id !== decoded._id)
                return res.sendStatus(403);
            const accessToken = jwt.sign(
                { _id: decoded._id },
                process.env.ACCESS_TOKEN.SECRET,
                { expiresIn: "1200s" }
            );
            res.json({ accessToken });
        }
    );
};

module.exports = { handleRefreshToken };