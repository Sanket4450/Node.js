const { log } = require('console');
const fs = require('fs');

// fs.mkdirSync('Directory 1');

// it will throw an error if it already exists

// check the content inside of a directory

let folderPath = 'Directory 1';

let folderContent = fs.readdirSync(folderPath);

console.log(folderContent);

// check whether a directory exists or not

let doesExist = fs.existsSync('Directory 1');

console.log(doesExist);

let doesExist1 = fs.existsSync('Directory 5'); // doesn't exist

console.log(doesExist1);

// removing directory

// fs.rmdirSync('Directory 1');  the directory must be empty to be removed