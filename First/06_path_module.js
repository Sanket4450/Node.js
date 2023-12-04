const path = require('path'); // path module will give information regarding to path of a file or folder

let ext = path.extname('/Users/sankettalaviya/Desktop/Coding/Node JS/First/demo.txt');
// extname will give the extension of a file

console.log(ext);

let basename = path.basename('/Users/sankettalaviya/Desktop/Coding/Node JS/First/demo.txt');
// basename will give the actual file name

console.log(basename);

console.log(__filename); // shows working file
console.log(__dirname); // shows working directory