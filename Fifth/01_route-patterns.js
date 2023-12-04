const express = require('express');
const app = express();
const port = 1000;

app.get('/', (req, res) => {
    res.send("Welcome to SK Cars");
});

app.get('/persons/:id([0-9]{2})', (req, res) => {
    res.send(`You've entered a valid id : ${req.params.id}`)
}); // accepts id with 2 characters and including any number between 0 to 9

app.listen(port, () => {
    console.log(`server listening on port: ${port}`);
});