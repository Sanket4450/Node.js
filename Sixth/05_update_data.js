const dbConnect = require('./01_mongodb');

const updateData = async () => {
    let db = await dbConnect();
    let result = await db.updateOne(  // updates only first matched document
        { id: { $gte: 4 } },
        { $set: { quantity: 1200 } }
    )
    console.log(result);
}

updateData();

const updateManyData = async () => {
    let db = await dbConnect();
    let result = await db.updateMany(  // updates all matched documents
        { id: { $gte: 4 } },
        { $set: { quantity: 1200 } }
    )
    console.log(result);
}

updateManyData();