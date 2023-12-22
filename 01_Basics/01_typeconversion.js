

let score = "33"

console.log(typeof (score))

let intScore= Number(score)// changing the type from string to int

console.log(typeof(intScore))
console.log(intScore);

/*
Similarly we can change the types of other datatypes by using String, Boolean etc.
*/

console.log("2" + 1 + 2) // starting with string so rest is also considered as a string
console.log(1 + 2 + "2");// starting with int so first considering as a int and then string when a string is encountered.