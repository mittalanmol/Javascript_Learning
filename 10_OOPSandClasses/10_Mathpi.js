// We can't change the value of Pi as it's properties are unwritable in internal js
// And we will see how to see the internal properties of predefined functions and variables


/**

console.log(Math.PI);
Math.PI = 5 //we can't change the value of PI
console.log(Math.PI);

*/

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter); // we can see the property description  writable, enumerable and configurable properties are all false

const chai = {
    name: 'ginger chai',
    price: 110,
    isAvailable: true,

    orderChai: function () {
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name")); // defining in key value pair chai ke andar name variable ki properties
//we can see the property description of variable name such as writable, enumerable and configurable properties are all true and we can edit them


Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// chai.name = "Anmol" // it will give error as we set the writable propert to false

console.log(chai);

// enumerable is false too so name ko through loop access nhi kr payege

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {  // we don't want to print function so if type is function it will not go to if statement

        console.log(`${key} : ${value}`);
    }
}
