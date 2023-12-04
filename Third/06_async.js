const fs = require('fs');

// asynchronous method to read files
// but now all files are dependent over each other

console.log("Before");

fs.readFile('Third/text1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log("Data of File 1 --> " + data);
    fs.readFile('Third/text2.txt', read2);  // when first function is executed, it will execute the second one
});

const read2 = (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log("Data of File 2 --> " + data);
    fs.readFile('Third/text3.txt', read3);  // when second function is executed, it will execute the third one
};

const read3 = (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log("Data of File 3 --> " + data);
};
// this is called serial execution (one by one execution)

console.log("After"); // executed before files