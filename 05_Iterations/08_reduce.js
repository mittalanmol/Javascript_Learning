//Reduce
//Calls the specified callback function for all the elements in an array.
//The return value of the callback function is the accumulated result, and is provided as an argument in the
//next call to the callback function.

const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function(acc, currval){
    console.log(`acc:${acc} and currval:${currval}`);
    return acc+currval
},0) // here 0 is an initial value written outside the function

console.log(myTotal);

//++++++++++++++Implicit way 
const myTotal1= myNums.reduce((acc,currval)=> acc+currval,0)
console.log(myTotal1);

//++++++++++++++ Objects in an Array

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

// Let's add the price using reduce method

const pricetopay= shoppingCart.reduce((acc,shoppingCartitem)=> {
    return acc+shoppingCartitem.price
},0)

console.log(pricetopay);

