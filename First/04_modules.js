// now we will import the function created in previous file

const abc = require('./03_test'); // stored module file in variable abc

abc.addition(12, 5); // calling function key of abc module

// if function was exported without key then we need to call its original name

abc.subtraction(12, 5);
abc.multi(12, 5); // multi isn't a key, it is function name
abc.division(12, 5);

console.log(abc.name); // imported variable from previous module