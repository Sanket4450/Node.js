const express = require('express');
const path = require('path');
const dbConnect = require('./mongodb');
const app = express();
const port = 9000;

app.use(express.static(path.join(__dirname)));

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/form.html');
});

app.get('/form-submit', async (req, res) => {
    
    let collection = await dbConnect();

    let result = await collection.insertOne(req.query);
    
    if (result.acknowledged) {
        res.send(`<h2 style="text-align: center; color: blue;">Registered Successfully</h2>`);
    }
    else {
        res.status(404);
        res.send(`<h2 style="text-align: center; color: red;>Error! Registration failed</h2>`);
    }
});

app.get('*', (req, res) => {
    res.status(404).send(`<h2 style="text-align: center;">Error! Page not found</h2>`);
});

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});