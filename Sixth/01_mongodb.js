const { MongoClient } = require('mongodb'); // MongoClient is a class
const uri = 'mongodb://localhost:27017'; // giving the default mongodb host & port
const database = 'Company';  // defining which database we want to import from mongodb
const client = new MongoClient(uri);

async function dbConnect() {
    let result = await client.connect(); // connecting to database
    let db = result.db(database);  // importing database, above we assigned Company database
    return db.collection('products'); // returning products collection from Company database
}

module.exports = dbConnect; // exporting above function