//Primitive datatypes
// 7 types : String, number, boolean, null, undefined, Symbol, bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const bigNumber = 3456543576654356754n // bigint 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // this will give false as an output 


// Non-Primitive (Reference)
// Array, Objects, Functions

//Array
const names = ["Anmol" , "Harsh", "Vivek"];

//Objects 
let myObj={           //= after object names
    name:"Anmol",     //: after variable
    age: 21,
}

//Functions

let myfunction= function (){
    console.log("Hello world");
}

console.log(typeof(myfunction)); //can check typeof any datatype

/*
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
   
Documentation
https://262.ecma-international.org/5.1/#sec-11.4.3

*/