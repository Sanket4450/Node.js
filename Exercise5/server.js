const express = require('express');
const app = express();

require('dotenv').config({ path: __dirname + '/.env' });
require('./config/database');

const Books = require('./models/books');

app.use(express.json());

app.get('/books', async (req, res) => {

    const books = await Books.find();
    res.json(books);
});

app.get('/books/:_id', async (req, res) => {

    try {
        let book = await Books.findOne(req.params);
        res.json(book);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.get('/books/search/:key', async (req, res) => {

    const key = req.params.key;

    let books = await Books.find({
        $or: [
            { title: { $regex: `(?i)${key}(?-i)` } },
            { author: { $regex: `(?i)${key}(?-i)` } },
            { description: { $regex: `(?i)${key}(?-i)` } }
        ]
    });
    if (books.length === 0) res.send("Can't find any book");
    else res.json(books);
});

app.post('/books', async (req, res) => {

    const { title, author, description, image } = req.body;

    let result = await Books.create({
        title,
        author,
        description,
        image
    });
    res.send(result);
});

app.put('/books/:_id', async (req, res) => {

    try {
        let result = await Books.updateOne(req.params, { $set: req.body });
        res.send(result);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.delete('/books/:_id', async (req, res) => {

    try {
        let result = await Books.deleteOne(req.params);
        res.send(result);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.get('*', (req, res) => {
    res.send("Can't handle request");
});

port = process.env.PORT || 1200;

app.listen(port, () => {
    console.log(`server listening on port: ${port}`);
});