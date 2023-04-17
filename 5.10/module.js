const { calculateTax } = require("./modules/taxCalculator.js");

let income = 50000;
let tax = calculateTax(income);
console.log(`Tax on ${income} is ${tax}`);
// Tax on 50000 is 5000
