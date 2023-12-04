const crypto = require('crypto'); // crypto module provides a way of handling encrypted data.

const constants = crypto.constants; // Returns an object containing Crypto Constants
// console.log(constants);

const ciphers = crypto.getCiphers(); // Returns an array of supported cipher algorithms
// console.log(ciphers);

const curves = crypto.getCurves(); // Returns an array of supported elliptic curves
// console.log(curves);

const hashes = crypto.getHashes(); // Returns an array of supported hash algorithms
// console.log(hashes);

const random1 = crypto.randomBytes(5); // Creates random data in Buffer format
console.log(random1);

const random2 = crypto.randomBytes(10).toString(); // Converts random data into string
console.log(random2);

const random3 = crypto.randomBytes(20).toString('base64'); // Converts random data into base64 string
console.log(random3);

// this is the most used one crypto method
const random4 = crypto.randomBytes(25).toString('hex') // Converts random data into hex format string
console.log(random4);