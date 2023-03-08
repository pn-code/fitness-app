const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
require("dotenv").config();

const registerUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
        res.status(400);
        throw new Error("Please add all fields.");
    }

    // Check to see if user exists...
    const userExists = await User.findOne({ email });

    if (userExists) {
        return res.status(400).json({ message: "User already exists." });
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
        refreshToken: "",
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
        });
    } else {
        res.status(400).json({ message: "Invalid user information" });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    // Checks for empty fields
    if (!email || !password)
        return res.status(400).json({
            message: "Email and password are required.",
        });

    // Check for user email
    const findUserByEmail = await User.findOne({ email });

    // If user is not found...
    if (!findUserByEmail) return res.sendStatus(401);

    // If user is found, check password against hashed password
    const match = await bcrypt.compare(password, findUserByEmail.password);

    // If user pwd matches our pwd in the database...
    if (match) {
        // Create JWTs
        const accessToken = jwt.sign(
            { _id: findUserByEmail._id },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "1500s" }
        );

        const refreshToken = jwt.sign(
            { _id: findUserByEmail._id },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: "1d" }
        );

        // Update db with user's newly generated refresh token.
        await User.findByIdAndUpdate(findUserByEmail._id, {
            refreshToken: refreshToken,
        });

        // Set cookie for our client
        res.cookie("jwt", refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
            secure: true,
            sameSite: "None",
        });

        res.json({
            _id: findUserByEmail._id,
            firstName: findUserByEmail.firstName,
            lastName: findUserByEmail.lastName,
            email: findUserByEmail.email,
            weights: findUserByEmail.weights,
            calorieGoal: findUserByEmail.calorieGoal,
            accessToken,
        });
    } else {
        res.status(403).json({ success: false, message: "Wrong Credentials." });
    }
};

const loginAsGuest = async (req, res) => {
    try {
        const randomNumber = Math.ceil(Math.random() * 10000);
        const accessToken = jwt.sign(
            { _id: randomNumber },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "1500s" }
        );
        
        res.json({
            _id: 1,
            firstName: "Guest",
            lastName: "",
            email: "",
            weights: [],
            calorieGoal: "",
            accessToken,
        });
    } catch (error) {
        res.status(500).json({ success: false });
    }
};

const getUserData = async (req, res) => {
    const { _id, firstName, lastName, email, weights, calorieGoal } =
        await User.findById(req.user._id);
    res.json({ _id, firstName, lastName, email, weights, calorieGoal });
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

module.exports = {
    registerUser,
    loginUser,
    loginAsGuest,
    getUserData,
    logoutUser,
};
