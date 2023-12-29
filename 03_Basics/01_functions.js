function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))

//+++++++++++++ REST Operator

function calculateCartPrice(...num1){ // can take any number of arguments as it is using rest operator
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))  // can pass any number of arguments

//+++++++++++ Declaring oobject inside a function
const user = {
    username: "Anmol",
    age: 21
}

function handleObject(anyobject){
    console.log(`${anyobject.username} is ${anyobject.age}`);
}

handleObject(user)

/* can also pass object directly in a function call
handleObject({
    username: "sam",
    price: 399
})

*/


//++++++++++ Passing array in a function

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));

// console.log(returnSecondValue([200, 400, 500, 1000])); Directly initializing array inside a function