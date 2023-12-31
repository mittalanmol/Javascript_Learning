// for of loop

// ["", "", ""] // Strings in an array
// [{}, {}, {}] // Objects in an array

// We can use For of loop for values printing/for iterating over values directly over [[[[ Strings & Array & Maps ]]]

const arr = [1, 2, 3, 4, 5]

for (const i of arr) {
    console.log(i);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

// Maps

const map= new Map()
map.set("IN","India")
map.set("USA","United Stated of America")
map.set("Fr","France")

// console.log(map);

for (const [key, value] of map) {  // to access the key and values of maps individually we are initialising the key, value inside a bracket
    console.log(key, ':-', value);
}

//++++++++++++++++ Objects can't be iterate using for of loop
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// } // will give an error as we can't iterate the objects