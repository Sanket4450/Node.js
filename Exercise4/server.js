require('./config');

const express = require('express');
const app = express();

const User = require('./users');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

const port = 1100;

app.use(express.static(__dirname));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/signup.html');
});

app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/signup.html');
});

app.post('/signup', async (req, res) => {

    try {
        const { first_name, last_name, email } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            res.sendFile(__dirname + '/signin_again.html');
        }

        else {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt);

            User.create({
                first_name,
                last_name,
                email,
                password: hashedPassword,
            });

            res.send(`<h1 style="text-align: center;">Sign Up Successfully</h1>`);
        }
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.get('/signin', (req, res) => {
    res.sendFile(__dirname + '/signin.html');
});

app.post('/signin', async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        res.sendFile(__dirname + '/signup_again.html');
    }

    else {
        const passwordCheck = await bcrypt.compare(password, user.password);
        
        if (!passwordCheck) {
            res.sendFile(__dirname + '/signin_once_again.html');
        }
        else {
            res.send(`<h1 style="text-align: center;">Sign In Successfully</h1>`);
        }
    }
});

app.listen(port, () => {
    console.log(`server listening on port: ${port}`);
});