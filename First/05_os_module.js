// Node has many pre-defined modules, OS module is one of them

const os = require('os'); // os module will give the information about the current operating system

console.log(os.arch()); // architechture (64 or 32)

console.log(os.platform());

console.log(os.totalmem());
console.log(os.freemem());

// there are many more os methods.