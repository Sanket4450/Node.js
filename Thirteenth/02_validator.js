const validator = require('validator'); // for validating data

console.log(validator.isEmail("abc@xyz"));
console.log(validator.isEmail("abc@x.c"));
console.log(validator.isEmail("abc@xyz.com"));

console.log(); // just for line-break

console.log(validator.isLowercase("SANKET"));
console.log(validator.isLowercase("Sanket"));
console.log(validator.isLowercase("sanket"));

console.log(); // just for line-break

console.log(validator.isUppercase("talaviya"));
console.log(validator.isUppercase("Talaviya"));
console.log(validator.isUppercase("TALAVIYA"));

console.log(); // just for line-break

console.log(validator.isEmpty(" "));
console.log(validator.isEmpty(""));