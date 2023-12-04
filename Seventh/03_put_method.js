const express = require('express');
const dbConnect = require('./company');
const app = express();
const port = 13000;

app.use(express.json());

app.put('/:id', async (req, res) => {
    
    let db = await dbConnect();
    let collection = db.collection('employees');

    let result = await collection.updateOne({id: parseInt(req.params.id)}, {$set: req.body});
    res.send(result);
});

app.listen(port, () => {
    console.log(`server listening on port: ${port}`);
});