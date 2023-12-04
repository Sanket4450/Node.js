const express = require('express');
const app = express();
const port = 1400;

const upload = require('./05_upload');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/upload.html');
});

app.post('/upload', upload.single('file'), (req, res) => {
    console.log(req.file);
    res.json("File Uploaded Successfully");
});

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});