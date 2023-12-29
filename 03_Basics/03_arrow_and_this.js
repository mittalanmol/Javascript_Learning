// this represents the current context

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this); // here this returns an empty object as the context here is empty as node is in empty environment

function chai(){
    let username = "hitesh"
    console.log(this.username); // returns undefined as can't access object 
    // console.log(this); //will return lot of information abt currrent context as this is inside node environment now
}

chai()
// Same concept above function declaration is diff
const chai1 = function () {
    let username = "hitesh"
    console.log(this.username);
}

chai1()

const chaiarrow =  () => {
    let username = "hitesh"
    console.log(this.username);
}

chaiarrow()


//+++++++++++++++++++++++++++++++++++++++++ ARROW FUNCTION

//Normal Method removed the function keyword and added => after the paranthesis
const addTwo1 = (num1, num2) => {
    return num1 + num2
}

// Implicit Method  (removed the return keyword)
const addTwo2 = (num1, num2) =>  num1 + num2

// Paranhesis Method 
const addTwo3 = (num1, num2) => ( num1 + num2 ) // no need to use return keyword in case of Paranthesis 

// Object inside Arrow function it is mandatory to use Paranthesis if we wanna return object in case of arrow functions
const addTwowithObjects = (num1, num2) => ({username: "hitesh"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()