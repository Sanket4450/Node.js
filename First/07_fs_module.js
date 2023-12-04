const fs = require('fs'); // fs module is used to read, write, update & delete files

// reading a file

let fileContent = fs.readFileSync('Node JS/First/f1.txt');

console.log(fileContent); // this will be in buffer format

console.log(fileContent.toString()); // now we converted this into a string format

// writing in a file

fs.writeFileSync('Node JS/First/f2.txt', 'This is File 2');

// it will overwrite the previous text and writes new text

// if there is no such file, write method will create a new file then write such content inside it

// updating (appending) a file

fs.appendFileSync('Node JS/First/f3.txt', 'This is File 3');

// it won't overwrite text, but append new text after the previously written text\

// delete a file

// fs.unlinkSync('Node JS/First/f4.txt');

// gives an error if no file or directory will be found