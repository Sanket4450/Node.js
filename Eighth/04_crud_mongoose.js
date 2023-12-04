const express = require('express');
require('./02_config_mongoose');
const departmentsModel = require('./03_departments_mongoose');

const app = express();
const port = 6000;

app.use(express.json());

// read operation

app.get('/', async (req, res) => {
    let data = await departmentsModel.find();
    res.send(data);
});

// create operation

app.post('/', async (req, res) => {
    let data = await new departmentsModel(req.body);
    let result = await data.save();
    res.send(result);
});

// update operation

app.put('/:_id', async (req, res) => {
    let result = await departmentsModel.updateOne(req.params, { $set: req.body }); 
    res.send(result);
});

// delete operation

app.delete('/:_id', async (req, res) => {
    let result = await departmentsModel.deleteOne(req.params);
    res.send(result);
});

app.listen(port, () => {
    console.log(`server listening on port: ${port}`);
});