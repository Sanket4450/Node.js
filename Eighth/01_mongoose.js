const mongoose = require('mongoose');

const main = async () => {

    await mongoose.connect("mongodb://localhost:27017/Company");

    const salesSchema = new mongoose.Schema({
        id: Number,
        category: String,
        brand: String,
        model: String,
        quantity: Number
    });

    return mongoose.model('sales', salesSchema);
};

// reading data

const readData = async () => {

    const salesModel = await main();

    let result = await salesModel.find();
    console.log(result);
}

// inserting data

const insertData = async () => {

    const salesModel = await main();

    let data = new salesModel({
        id: 2,
        category: "laptop",
        brand: "HP",
        model: "HP 15s",
        quantity: 120,
        name: "Apple"
    });
    
    let result = await data.save();
    console.log(result);
}

// updating data

const updateData = async () => {

    const salesModel = await main();

    let result = await salesModel.updateOne({id: 1}, {$set: {model: "iPhone 14 pro", quantity: 50}});

    console.log(result);
}

// deleting data

const deleteData = async () => {

    const salesModel = await main();

    let result = await salesModel.deleteOne({id: 2});

    console.log(result);
}

readData();
// insertData();
// updateData();
// deleteData();

// cannot call all functions at a time