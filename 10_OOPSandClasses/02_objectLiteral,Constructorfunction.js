
//++++++++++++ Object Literal
const user = {
    username: "anmol",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        console.log(`Username: ${this.username}`); // this keyword gives the information abt current execution context
        console.log(this); // it will give the details of whole object as current context is object
    }

}

console.log(user.username)
// console.log(user.getUserDetails());
console.log(this); // here it will give empty as the current global context is empty, and it changes with the environment for browser it will give many things related to window object


//+++++++++++++++ Constructor function

// it helps to create multiple instances of a single object or a function 

function User(username, loginCount, isLoggedIn) {
    this.username = username;  // this.username is variable here 
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function () {
        console.log(`Welcome ${this.username}`);

    }

    return this // we passed on the object, it is also not mandatory to use return this 
}

const userOne = new User("anmol", 12, true)  // if we don't use the new keyword the new function will overwrite the prev one 
const userTwo = new User("mittal", 11, false)  //So we use new keyword to create multiple instances 

console.log(userOne.constructor); // it will give the reference to itself
console.log(userTwo);



// The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object.