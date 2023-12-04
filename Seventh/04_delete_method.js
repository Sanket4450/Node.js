const express = require('express');
const dbConnect = require('./company');
const app = express();
const port = 14000;

app.use(express.json());

app.delete('/:id', async (req, res) => {

    let db = await dbConnect();
    let collection = db.collection('employees');

    let result = await collection.deleteOne({id: parseInt(req.params.id)});
    res.send(result);
});

app.listen(port, () => {
    console.log(`server listening on port: ${port}`);
});