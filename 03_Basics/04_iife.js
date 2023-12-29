// Immediately Invoked Function Expressions (IIFE)
// Used to remove the pollution of global scope and variables

//iife using nomal function declaration
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// ()();
//  () inside this paranthesis function is declared 
//  () it's the paranthesis of function call
// ; to terminate the first iife if we need to use two iife

//iife using arrow function
((name)=>{
    console.log(`${name} is connected to database`);
} )('Anmol')