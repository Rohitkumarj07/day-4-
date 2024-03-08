/*
Convert all the strings to title caps in a string array using arrow functions
*/


const stringArray = ["Renown", "Roney", "vijay", "marian", "merry"];

const titleCapsArray = stringArray.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());

console.log("Title caps in a string array:",titleCapsArray);
