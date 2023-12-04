const express = require('express');
const app = express();

const bcrypt = require('bcryptjs');

const port = 500;

app.use(express.json());

const users = [];

app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users/register', async (req, res) => {

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // const hashedPassword = await bcrypt.hash(req.body.password, 10); instead we can directly do this

        const user = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username,
            password: hashedPassword
        }
        users.push(user);
        res.json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).send();
    }
});

app.post('/users/login', async (req, res) => {

    const user = users.find(item => item.username === req.body.username);

    if (!user) res.status(400).send("Cannot find user! register first to get started");

    try {
        const passwordCheck = await bcrypt.compare(req.body.password, user.password);
        // In compare function, first argument is for user entered password & second for hashed password

        if (passwordCheck) res.send('Success!');
        else res.send('Wrong password! try again');
    }
    catch (error) {
        console.log(error);
        res.status(500).send();
    }
});

app.listen(port, () => {
    console.log(`server listening on port: ${port}`);
});