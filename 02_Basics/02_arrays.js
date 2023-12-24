const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // by this we get two arrays in one array 

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); // here we can see by push it has become complex to access the array

const allHeros = marvel_heros.concat(dc_heros) // by conact we have to store into a new array
console.log(allHeros);

//Spread method like we drop a glass and it breakes into a pieces
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // it stores into a new array and here infinity means there can be any number of subarrays like in above there are 3
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) // Checking is the Hitesh is an array here 
console.log(Array.from("Hitesh")) // converting into a array
console.log(Array.from({name: "hitesh"})) // can't convert into an object easily. interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // another way to store elements into an array