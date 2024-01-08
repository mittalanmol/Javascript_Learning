function multipleBy5(num) {

    return num * 5
}

multipleBy5.power = 2;// it means we can use . with function as objects

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score) {
    this.username = username
    this.score = score
}


createUser.prototype.increment = function () { // we are injecting a new property in our createUser function using prototype
    this.score++;
}

createUser.prototype.printMe = function () {
    console.log(`price is ${this.score}`);
}

const chai = new createUser('chai', 25) // here using new keyword is mandatory as it defines all the new properties and added and handles multiple instances

chai.printMe()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. 
This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly 
created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, 
to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a 
non-primitive value (object, array, function, etc.), the newly created object is returned.

*/