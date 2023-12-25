//there are two ways to declare objects one method creates singleton and one doesn't
//1st Method 
// object.create (constructor method it creats singleton)

// 2nd Method 

const mySym = Symbol("key")

const JsUser={
    name:"Anmol", // when we write name here at backend it also storing as a string
    "full name": "Anmol Mittal", // can also initialized the variable as a string 
    age:18,
    location: "Delhi",
    email: "anmol@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    [mySym]:"mykey" // mandatory to use brakcet here otherwise it would be considered as a string
}

// There are two ways to access the object 
// by dot and bt square brackets

console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(JsUser["full name"]);// we can't access fullname using oobject so here comes the need of second method

// Sqaure method also used to access the symbol variables

console.log(JsUser[mySym]);

JsUser.email = "anmol@chatgpt.com"
// Object.freeze(JsUser) // object is freeze there will be no changes afterwards // commenting it bcz the afterwards function will not work it is freezed
JsUser.email = "anmol@microsoft.com"

console.log(JsUser); // email will not be changed after the chatgpt one

JsUser.greeting = function(){
    console.log("hello Js user");
}

JsUser.greeting2= function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting()); // we have to treat it as a methiod i.e. put ()
console.log(JsUser.greeting2());

