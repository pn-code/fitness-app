const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const registerUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
        res.status(400);
        throw new Error("Please add all fields.");
    }

    // Check to see if user exists...
    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error("User already exists.");
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
        });
    } else {
        res.status(400);
        throw new Error("Invalid user data!");
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    // Check for user email
    const user = await User.findOne({ email });

    // Check password against hashed password
    if (user && (await bcrypt.compare(password, user.password))) {
        // Create JWTs
        const accessToken = jwt.sign(
            { _id: user._id },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "1200s" }
        );

        const refreshToken = jwt.sign(
            { _id: user._id },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: "1d" }
        );

        // Saving Refresh Token with Current User
        const updatedUser = await User.findByIdAndUpdate(user._id, {
            ...user,
            refreshToken,
        });
        res.cookie("jwt", refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
            secure: true,
            sameSite: "None",
        });
        res.json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            accessToken,
        });
    } else {
        res.status(400);
        throw new Error("Invalid credentials");
    }
};

const getUserData = async (req, res) => {
    const { _id, firstName, lastName, email } = await User.findById(
        req.user._id
    );
    res.json({ _id, firstName, lastName, email });
};

const logoutUser = async (req, res) => {
    // On client, also delete the accessToken

    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); // No content
    const refreshToken = cookies.jwt;

    const findUserByToken = await User.find({ refreshToken });

    // If the token is not found in our database, clear this token.
    if (!findUserByToken) {
        res.clearCookie("jwt", {
            httpOnly: true,
            sameSite: "None",
            secure: true,
        });
        return res.sendStatus(204);
    }

    // If the token is found in our database, delete this token from db.
    const updatedUser = await User.findByIdAndUpdate(findUserByToken._id, {
        ...findUserByToken,
        refreshToken: "",
    });

    res.clearCookie("jwt", {
        httpOnly: true,
        sameSite: "None",
        secure: true,
    });

    res.sendStatus(204);
};

module.exports = { registerUser, loginUser, getUserData, logoutUser };
