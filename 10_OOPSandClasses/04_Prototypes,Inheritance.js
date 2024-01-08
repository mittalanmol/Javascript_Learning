let myName = "hitesh     "
let myChannel = "chai     "

console.log(myName.trim().length);
//console.log(myChannel.trueLength);
// what if we want to make a new method or a function which will perform the trimming we can make this and add into protypes

let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

//Let's inject a new property in the objects using prototype

Object.prototype.anmol = function () {
    console.log("anmol is present in all the objects. ");
}

Array.prototype.sayHello = function () {
    console.log("Hello dear!");
}

// Now array comes under objects so array can acces the new property anmol we made
// But objects can't access the new property of array (sayHello) as object is high in hierarchy

heroPower.anmol()
myHeros.anmol() // array can access the new proprty of object

myHeros.sayHello()
// heroPower.sayHello() // object can't access the new property of array



//+++++++++ Let's design our truelength function

String.prototype.truelength = function () {
    console.log(`True Length is: ${this.trim().length}`); // this will take the value of current context string
}


let fullName = "AnmolMittal     "

fullName.truelength()

"Anmol       ".truelength() // direct passing string


//++++++++++++++++ Inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport  // inside the object TASupport inheriting the properties of TeachingSupport
}

Teacher.__proto__ = User // Teacher inherits the property of User

//++++++++++ Modern Syntax of Inheritance 

Object.setPrototypeOf(TeachingSupport, Teacher) // TeachingSupport inherits the property of Teacher
