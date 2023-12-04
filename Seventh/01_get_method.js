const express = require('express');
const dbConnect = require('./company');
const app = express();
const port = 11000;

app.get('/:id', async (req, res) => {

    let db = await dbConnect();
    let collection = db.collection('employees');
    let employees = await collection.find().toArray();

    let employee = employees.find(value => value.id === parseInt(req.params.id));
    
    if (!employee) res.status(404).send("Employee with this id doesn't exist!");
    res.send(employee);
});

app.listen(port, () => {
    console.log(`server listening on port: ${port}`);
});