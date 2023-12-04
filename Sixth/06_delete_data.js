const dbConnect = require('./01_mongodb');

const deleteData = async () => {
    let db = await dbConnect();
    let result = await db.deleteOne({ id: { $gte: 7 } }); // deletes only first matched document
    if (result.acknowledged) {
        console.log("record deleted successfully...");
    }
}

deleteData();

const deleteManyData = async () => {
    let db = await dbConnect();
    let result = await db.deleteMany({ id: { $gt: 7 } }); // deletes all matched document
    if (result.acknowledged) {
        console.log(result.deletedCount, "records deleted successfully...");
    }
}

deleteManyData();