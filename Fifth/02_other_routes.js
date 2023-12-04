const express = require('express');
const app = express();

const port = 50000;

app.get('/', (req, res) => {
    res.send(`<h2 style="text-align: center;">Welcome to the Home page</h2>`);
});

app.get('/login', (req, res) => {
    res.send(`<h2 style="text-align: center;">Welcome to the Login page</h2>`);
});

app.get('/courses', (req, res) => {
    res.send(`<h2 style="text-align: center;">Welcome to the Courses page</h2>`);
});

app.get('/about', (req, res) => {
    res.send(`<h2 style="text-align: center;">Welcome to the About page</h2>`);
});

// other routes

app.get('*', (req, res) => {  // if any of the above routes doesn't match
    res.status(404).send(`<h2 style="text-align: center;">Error! Page not found</h2>`);
});

app.listen(port, () => {
    console.log(`server listening on port: ${port}`);
});