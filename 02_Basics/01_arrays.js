// array
const myArr = [1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4) // another way of decalring array
console.log(myArr[1]);

// //++++++++++++ Methods of Array ++++++++++++++++++++++++

myArr.push(6)
myArr.push(7)
myArr.pop()
console.log(myArr);

myArr.unshift(9) // it itroduces the number to first index but it's an expensive opeartion
console.log(myArr);
myArr.shift() // it shifts the first element
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join() // a join converts the given array into a string array

console.log(myArr);
console.log( newArr);
console.log(typeof(newArr));

//++++++++++++ Slice and Splice ++++++++++++++++++++++

console.log("Original Array before slice", myArr);
const myslice = myArr.slice(1, 3) // slice doesn't include the last elememt and it also doesn't modify the original array
console.log(myslice);

console.log("Original Array after slice ", myArr);

console.log("\nOriginal Array before splice ", myArr);
const mysplice = myArr.splice(1, 3) // splice does include the last elememt and it also modify the original array
console.log(mysplice);
console.log("Original Array after splice ", myArr);

