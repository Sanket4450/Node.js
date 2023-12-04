const express = require('express');
require('./02_config_mongoose');
const departmentsModel = require('./03_departments_mongoose');

const app = express();
const port = 100;

app.get('/search/:key', async (req, res) => {

    let data = await departmentsModel.find({
        $or: [
            { name: { $regex: req.params.key } },
            { head: { $regex: req.params.key } }
        ]
    });

    res.send(data);
});

app.listen(port, () => {
    console.log(`server listening on port: ${port}`);
});