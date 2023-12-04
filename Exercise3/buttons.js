const express = require('express');
const app = express();

const port = 60000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/buttons.html');
});

app.get('/home', (req, res) => {
    res.send(`<h1 style="text-align: center;">Welcome to Home Page</h1>`);
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

app.get('/account', (req, res) => {
    res.sendFile(__dirname + '/account.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html');
});

app.get('*', (req, res) => {
    res.status(404).send(`<h2 style="text-align: center;">Error! Page not found</h2>`);
});

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});