let age = 20;

// in previous file, age was 17 and here, it is 20

function add(a, b) {
    console.log(a + b);
}

var name = "Sanket";

// suppose we want to use this function in another file, we can do that with the help of modules

module.exports = {
    addition : add, // addition is the key for add function
    subtraction : sub,
    multi,  // we can also export functions without keys
    division : div,
    name  // can also export variables, but they have to be defined before this
}

function sub(a, b) {
    console.log(a - b);
}

function multi(a, b) {
    console.log(a * b);
}

function div(a, b) {
    console.log(a / b);
}

console.log(module);