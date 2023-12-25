// const tinderUser = new Object() // A singleton will create

const tinderUser = {} // normal method singleton will not create

tinderUser.id = "123abc" // initializing variables inside the object
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


//+++++++++++++++++++++++++++++++++++objects in objects
const regularUser = {
    email: "some@gmail.com",
    fullname: {  // using : here while declaring another object
        userfullname: {
            firstname: "anmol",
            lastname: "mittal"
        }
    }
}

//console.log(regularUser.fullname?.userfullname.firstname); // we are using ? so that in case there is no fullname it will handle the exception


//++++++++++++++++++++++++++++Combining Objects
// Creating objects
const obj1 = {1: "a", 2: "b"}  // key and value pair
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}


//const obj4 = { obj1, obj2 }// poor method of combining as it will create objects in a object
 const obj4 = Object.assign({}, obj1, obj2, obj3) // Assign method {} is a target and rest obbjects are the source

console.log(obj4);

const obj5={...obj1,...obj2,...obj3}  // Spread Operator

console.log(obj5);

//++++++++++++++++++++++++++++++++++Array of Objects

const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    },
]

console.log(users[0].email);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// to check the keys or values or entries inside the object

console.log(Object.keys(tinderUser)); // it returns the result in an array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

//+++++++++++++++++++++++++ Has Own Property

console.log(tinderUser.hasOwnProperty("isLoggedIn")); // does the object has this property or not


//++++++++++++++++++ Destructuring of Objects

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
} // we decared one object

// course.courseInstructor // Normal method of calling an object

const {courseInstructor: instructor} = course  //Destructuring
// renamed courseInstructor to instructor as it was kinda long

console.log(instructor);


//++++++++++++++++++++++ API's are basically jSON format
// A json is mostly a object without any object name

/*
//No object name

{
    "name": "hitesh",
    "coursename": "js in hindi",
    "price": "free"
}

//Sometimes in array format too

[
    {},
    {},
    {}
]

*/



