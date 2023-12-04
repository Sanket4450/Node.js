const express = require('express');
const app = express();

const connectDatabase = require('./config/database');

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

connectDatabase();

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Welcome to Home Page");
});

const user = require('./routes/userRoute');
const token = require('./routes/tokenRoute');

app.use(user);
app.use(token);

app.get('*', (req, res) => {
    res.status(404).send("Error! Page not Found");
});

module.exports = app;