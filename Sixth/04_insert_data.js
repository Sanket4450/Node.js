const dbConnect = require('./01_mongodb');

const insertData = async () => {
    let db = await dbConnect();
    let result = await db.insertOne({
        id: 7,
        name: "camera",
        brand: ["Canon", "Sony", "Nikon"],
        quantity: 800
    });
    if (result.acknowledged) console.log("data inserted successfully...");
}

insertData();

// we can insert more than one object by using insertMany method & using array of objects

const insertManyData = async () => {
    let db = await dbConnect();
    let result = await db.insertMany([
        {
            id: 8,
            name: "bike",
            brand: ["Hero", "Honda", "Bajaj"],
            quantity: 500
        },
        {
            id: 9,
            name: "car",
            brand: ["Suzuki", "Hyndai", "Toyota", "Honda", "Kia"],
            quantity: 250
        },
        {
            id: 10,
            name: "truck",
            brand: ["Tata", "Eicher", "Mahindra"],
            quantity: 150
        },
    ]);
    if (result.acknowledged) console.log("data inserted successfully...");
}

insertManyData();