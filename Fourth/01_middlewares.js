const express = require('express');
const myMiddleware1 = require('./02_middle1'); // imported from another file we created
const myMiddleware2 = require('./03_middle2'); // imported from another file we created
const morgan = require('morgan');

const app = express();
const port = 4000;

// these both are custom middlewares created by us

app.use(myMiddleware1);
app.use(myMiddleware2);

// this is a third party middleware

app.use(morgan('dev')); // middleware with argument
// morgan has total five arguments

app.get('/', (req, res) => {
    res.send("Welcome to this website");
});

app.get('/contact', (req, res) => {
    res.send("Contact No: 9876543210");
});

app.get('about', (req, res) => {
    res.send("We are world's leading robbery agency");
});

app.listen(port, () => {
    console.log(`Port is running on ${port}`);
});