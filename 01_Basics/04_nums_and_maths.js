const score = 400
// console.log(score);

const balance = new Number(100) // this is a efficient way of defining a int 
console.log(balance);

console.log(balance.toString().length); // number to string and then fetching the length
console.log(balance.toFixed(1));

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4)); // precision upto 4th number 

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // will separate the zeroes with comma and we use "en-IN" to use Indian format

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6)); // rounding off the  value
console.log(Math.ceil(4.2)); // rounding off with greater number
console.log(Math.floor(4.9)); // rounding off with lower number
console.log(Math.min(4, 3, 6, 8)); // fetching the min value
console.log(Math.max(4, 3, 6, 8));// fetching the max value

console.log(Math.random()); // used to fetch a random number between 0 to 1
console.log((Math.random()*10) + 1); // multiplying with 10 to incement the index and then adding 1 so that we don't gte zero
console.log(Math.floor(Math.random()*10) + 1); // fetching the lower random value 

//+++++++++++++++ Formula to fetch a random number by specifying the min and max range 
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)