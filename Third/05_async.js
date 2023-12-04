const fs = require('fs');

// asynchronous method to read files

console.log("Before");

fs.readFile('Third/text1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log("Data of File 1 --> " + data);
});

fs.readFile('Third/text2.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log("Data of File 2 --> " + data);
});

fs.readFile('Third/text3.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log("Data of File 3 --> " + data);
});
// files are executed not in order but in order they read (random order)

console.log("After"); // executed before files