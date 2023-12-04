const fs = require('fs');

// synchronous method to read files

console.log("Before");

let data1 = fs.readFileSync('Third/text1.txt');

console.log("Data of File 1 --> " + data1);

let data2 = fs.readFileSync('Third/text1.txt');

console.log("Data of File 1 --> " + data2);

let data3 = fs.readFileSync('Third/text1.txt');

console.log("Data of File 1 --> " + data3);

console.log("After"); // all executed in order (every statement waits for previous one to complete)