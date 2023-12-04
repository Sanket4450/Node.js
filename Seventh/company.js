const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';
const database = 'Company';
const client = new MongoClient(uri);

async function dbConnect() {
    let result = await client.connect();
    return result.db(database);
}

module.exports = dbConnect;