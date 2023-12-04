const express = require('express');
require('./01_config');
const user = require('./02_users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();
const port = 400;
const secret = "joker"

app.use(express.json());
app.use(cookieParser());

app.post('/register', async (req, res) => {

    try {
        // get all data from body
        const { firstName, lastName, email, password } = req.body;

        // all the data should exists
        if (!(firstName && lastName && email && password)) {
            res.status(400).send("all fields are compulsory!");
        }

        // check if user already exists by email
        const existingUser = await user.findOne({ email });

        if (existingUser) {
            res.status(401).send("User already exists with this email");
        }

        // encrypt the password
        const encPassword = await bcrypt.hash(password, 10);

        // save the user in DB
        const User = await user.create({
            firstName,
            lastName,
            email,
            password: encPassword
        });

        res.status(201).json(User);

    } catch (err) {
        console.log(err);
    }
});

app.post('/login', async (req, res) => {

    try {
        // get all data from frontend
        const { email, password } = req.body;

        // validation
        if (!(email && password)) {
            res.status(400).send("Email or Password missing");
        }

        // find user in DB
        const User = await user.findOne({ email });

        if (!User) {
            res.status(400).send("User doesn't exist! please register first");
        }

        // match the password
        const passCheck = await bcrypt.compare(password, User.password); // returns boolean value

        // send a token
        if (passCheck) {
            const token = jwt.sign(
                { id: User._id, email },
                secret,  // jwt secret
                { expiresIn: "1h" }
            );

            User.token = token;
            User.password = undefined;

            // send token in user cookie
            // cookie section
            const options = {
                expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
                httpOnly: true
            };

            res.status(200).cookie('token', token, options).json({
                success: true,
                token: token,
                User: User
            });
            } else {
                res.send("invalid password!");
            }

    } catch (err) {
        console.log(err);
    }
});

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});