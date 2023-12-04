const dbConnect = require('./01_mongodb'); // requiring module to call dbConnect function

dbConnect().then(res => {  // dbConnect is returning a promise
    res.find().toArray().then(data => { // toArray function returns a promise
        console.log(data);
    });
});

// here, we are handling promises using .then method