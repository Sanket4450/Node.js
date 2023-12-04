const express = require('express');
const app = express();
const port = 2000;

app.get('/', (req, res) => {
    res.send("Welcome to this website");
});

app.get('/contact', (req, res) => {
    res.send("Contact No: 9876543210");
});

app.get('about', (req, res) => {
    res.send("We are world's leading robbery agency");
});

// route parameters

app.get('/products/:id', (req, res) => { // /products/12, /products/30, /products/a56
    res.send(req.params.id); // sending perticular id entered by the client as a response
});

app.listen(port, () => {
    console.log(`Port is running on ${port}`);
});