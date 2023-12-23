//Old way:
let name = "Anmol"
let age =  21
console.log("My name is " + name + " and I am " + age + " years old.")

//New way 

console.log(`My name is ${name} and I am ${age} years old.`);

//We use ` ` to write complete string and will use ${} to inject variables in it.

let properName = new String("Anmol-Mittal") // by this string is declared with associated prototypes

console.log(properName[0]);
console.log(properName.__proto__);

console.log(properName.length);
console.log(properName.toUpperCase());

console.log(properName.charAt(2)); 
console.log(properName.indexOf("m")); //fetching the index of string variable

console.log(properName.substring(0,5));
console.log(properName.slice(-12,4)); // can give negative index too using slice function

let newString = "    Anmol   "

console.log(newString.trim()); // used to remove white spaces

const url = "https://anmol.com/anmol%20mittal";

console.log(url.replace('%20', '-')) // replaces %20 with -

console.log(url.includes('sundar')) // will return boolean value if the word is included or not

const gameName= "Anmol-Mittal-com"
console.log(gameName.split('-')); // split according to variable we define