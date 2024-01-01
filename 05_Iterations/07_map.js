//Map
// The map method calls the callbackfn function one time for each element in the array.
//Calls a defined callback function on each element of an array, and returns an array that contains the results.

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums= myNumbers.map((item)=> item+10)

console.log(newNums);

//++++++++++++ Chaining

const newNums1 = myNumbers
                .map((num) => num * 10 )
                .map( (num) => num + 1) // it will get the result from above
                .filter( (num) => num >= 40)

console.log(newNums1);