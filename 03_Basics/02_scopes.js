//var can be access outside so that's why we don't use it much

if (true) {
    let a = 10
    const b = 20
    var c =30
    // console.log("INNER: ", a);
    
}

// console.log(a); error
// console.log(b); error
// console.log(c); no error

// Remember the kid can snatch older one's things but vice versa not true (Scope Concept)
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);  //username can be access here as this function is a sub-function 
    }
    // console.log(website); //can't access

     two()

}

// one()

if (true) {
    const username = "anmol"
    if (username === "anmol") {
        const website = " youtube"
        console.log(username + website); // will print
    }
    // console.log(website); error
}

// console.log(username); error


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))  // can call before initialization using this function decalartion

function addone(num){
    return num + 1
}


// Another menthod of function decalaration using variable

//addTwo(5)  // will give error 

const addTwo = function(num){
    return num + 2
}

addTwo(5)