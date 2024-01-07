// Promise has two parameters resolve and return
// and then it uses then to show the returned resolved request and cath to show error and
// finally to show The promise is either resolved or rejected

// There are many ways to decalre, we will discuss some below

//+++++++++++++++++ Method 1
const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function () {
        console.log("Asyn task is complete.");
        resolve(); // calling the then() method as the request is resolved 
    }, 1000)
})

promiseOne.then(function () {
    console.log("Promise Consumed.")
})

//++++++++++++++++++ Method 2 (not assigning the function in some variable)

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async Task 2");
        resolve();
    }, 1000)
}).then(function () {
    console.log("Async 2 is resolved.");
})

//++++++++++++++ Method 3 in this we will pass the some information in object form

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Anmol", email: "anmol0711mittal@gmail.com" })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
})

//+++++++++++++++ Method 4 (here we will use both resolve and reject)

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true; // here the error is true so else statement will work and reject will pass the statement
        if (!error) {
            resolve({ username: "Anmol", password: 123 })
        }
        else {
            reject("ERROR"); // reject handles the error 
        }
    }, 1000)
})

promiseFour.then(function (user) {
    console.log(user);
    return user.username;          // This concept is called Chaining
}).then((username) => {         // this then is getting value from the above then who returned username.
    console.log(username);
}).catch(function (error) {
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))


//+++++++++++++++++++++ We can perform the some above task using async function

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "javascript", password: "123" })
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});


async function consumePromiseFive() {
    try {
        const response = await promiseFive // await will get the request from the resolve function
        console.log(response);
    }
    catch (error) { // it will catch the error from reject method
        console.log(error);
    }
}

consumePromiseFive()// calling the asyn function

//++++++++++++++++++++ Let's use Fetch

import fetch from 'node-fetch';  //To fix the "ReferenceError: fetch is not defined" error, Importing and use node-fetch in the Node.js

fetch('https://api.github.com/users/mittalanmol')
    .then((response) => {
        return response.json()// converting the api data in JSON format
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error))


//+++++++++++ Fetch using Asynchronus function

/** 
async function getAllUsers() {
    try {
        const response = await fetch('https://api.github.com/users/mittalanmol')
        const data = await response.json()
        console.log(data);
    }
    catch (error) {
        console.log("E:", error);
    }
}

getAllUsers()
*/