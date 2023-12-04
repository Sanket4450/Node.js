require('dotenv').config({ path: "/Users/sankettalaviya/Desktop/Coding/NodeJS/Exercise6/.env" });

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/users');
const generateAccessToken = require('../utils/accessToken');
const generateResetToken = require('../utils/resetToken');
const createApiResponse = require('../utils/ApiResponse');

exports.registerUser = async (req, res) => {

    try {
        const { first_name, last_name, email, password } = req.body;

        if (!(first_name && last_name && email && password)) {
            res.status(400).send("All fields are compulsory!");
            return;
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            res.status(401).send("User already exists with this email!");
            return;
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        await User.create({
            first_name,
            last_name,
            email,
            password: hashedPassword
        });

        res.status(200).send("User registered successfully");
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

exports.loginUser = async (req, res) => {

    try {
        const { email, password } = req.body;

        if (!(email && password)) {
            res.status(400).send("Email or Password missing!");
            return;
        }

        const user = await User.findOne({ email });

        if (!user) {
            res.status(400).send("User not found!");
            return;
        }

        const passwordCheck = await bcrypt.compare(password, user.password);

        if (!passwordCheck) {
            res.status(400).send("Incorrect Password!");
            return;
        }

        const accessToken = generateAccessToken({ id: user._id, email });
        const refreshToken = jwt.sign({ id: user._id, email }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '30d' });

        await User.updateOne({ email }, { $set: { token: refreshToken } });

        const response = createApiResponse(true, '', { accessToken, refreshToken });
        
        res.status(200).cookie('token', accessToken, { httpOnly: true }).json(response);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

exports.forgotPassword = async (req, res) => {

    try {
        const { email } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            res.status(400).send("User not found!");
            return;
        }

        const resetToken = generateResetToken({ id: user._id, email });

        res.json({
            success: true,
            resetToken
        });
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

exports.resetPassword = async (req, res) => {

    try {
        const { password } = req.body;

        if (!password) {
            res.status(400).send("Password missing!");
            return;
        }

        jwt.verify(req.params.token, process.env.RESET_TOKEN_SECRET, async (err, user) => {

            if (err) {
                res.status(403).send("Invalid or Expired Token!");
                return;
            }

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            await User.updateOne({ email: user.email }, { $set: { password: hashedPassword } });

            res.status(200).send("Password updated successfully!");
        });
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

exports.logoutUser = async (req, res) => {

    try {
        const result = await User.updateOne({ _id: req.user._id }, { $set: { token: "" } });

        if (result.matchedCount) {
            res.status(203).send("Logout Successful!");
        }
        else {
            res.status(403).send("Logout Failed!");
        }
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

exports.getUserDetails = async (req, res) => {

    try {
        const user = await User.findById(req.user._id);

        const { first_name, last_name, email } = user

        res.status(200).json({
            success: true,
            user: {
                first_name,
                last_name,
                email
            }
        });
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}