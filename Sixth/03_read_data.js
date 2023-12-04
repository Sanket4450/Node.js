const dbConnect = require('./01_mongodb'); // requiring module to call dbConnect function

const main = async () => {
    let db = await dbConnect();
    let result = await db.find().toArray();
    console.log(result);
}

main(); // by calling this function, we get the data

// here, we are handling promises using async await
// async await method is more preferable than .then method

const getData = async (idno) => {
    let db = await dbConnect();
    let result = await db.find({id: idno}).toArray(); // returns object with specific id entered as argument
    console.log(result);
}

getData(3); // prints object with id 3
getData(5); // prints object with id 5

const getData1 = async () => {
    let db = await dbConnect();
    let result = await db.find({id: {$not: {$lt: 3}}}).toArray();
    console.log(result);
}
getData1();