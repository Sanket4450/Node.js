/** 
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */

function sum(x, y) {
    return x + y;
}

let getSum = sum(10, 20); // hover the sum function to get expected arguments

console.log(getSum);

/** 
 * @param {string} fname
 * @param {string} lname
 * @returns {string}
 */

function fullName(fname, lname) {
    return `Fullname is ${fname} ${lname}`;
}

let getFullName = fullName("Sanket", "Talaviya");
console.log(getFullName);