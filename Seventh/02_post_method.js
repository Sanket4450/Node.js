const express = require('express');
const dbConnect = require('./company');
const app = express();
const port = 12000;

app.use(express.json());

app.post('/', async (req, res) => {

    let db = await dbConnect();
    let collection = db.collection('employees');
    let employees = await collection.find().toArray();

    const employee = await Object.assign({ id: employees.length + 1 }, req.body);

    let result = await collection.insertOne(employee);
    res.send(result);
});

app.listen(port, () => {
    console.log(`server listening on port: ${port}`);
});