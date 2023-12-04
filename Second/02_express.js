// express is basically a framework of Node JS
// It can be also called a package, a module or a function

const express = require('express');

const app = express(); // calling express function to get the methods of express

const port = 8000; // initializing port

// get method

app.get('/', (req, res) => {  // '/' is the default route
    res.send('Hello From the Other Side...');
});

app.get('/products', (req, res) => {
    res.send(String([['Oranges', 700], ['Mangoes', 1000], ['Bananas', 1200], ['Apples', 500]]));
});

app.get('/about%20us', (req, res) => {
    res.send('talaviya_sanket@gmail.com' + " " + '9723540822');
});

app.listen(port, () => {
    console.log(`Port is running on ${port}`);
});