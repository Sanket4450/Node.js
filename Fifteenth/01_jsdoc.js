/** @type {string} */

// hover myString variable to see the expected type
let myString = "Sanket";

/** @type {boolean} */
let myBoolean = 123; // doesn't give an error, it just expects a type

/** @type {number[]} */
let myArray = [12, 34, 50, 453, 89, 230];

/** 
 * @typedef {object} biodata
 * @property {string} first_name
 * @property {string} last_name
 * @property {number} age
 * @property {string[]} interests
 */

/** @type {string|number} */
let abc = 120;

/** @type {biodata} */

const myObject = {
    first_name: "Sanket",
    last_name: "Talaviya",
    age: 17,
    interests: ["Philosophy", "Technology", "History"]
}