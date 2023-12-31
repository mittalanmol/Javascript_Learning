// for each loop

//We Can Use forEach loop For iterating {{Over Arrays}} and its values as well.

const coding = ["js", "ruby", "java", "python", "cpp"]

//++++++++++++ One way of defining call back function
coding.forEach(function (val){
    console.log(val);
})

//++++++++++++ Second way of defining call back function

coding.forEach( (item)=>{
    console.log(item);
})

//++++++++++++ Third way of defining call back function

function printme(item)
{
    console.log(item);
}

coding.forEach(printme) // her we are passing printme as a reference not as a method that's why we didn't use printme()

//+++++++++++++++++ In general using prototypes of array

coding.forEach((item,index,arr)=>{   //here it is predefined that first argument will fetch key , second index and third array
console.log(item,index,arr);
})

//+++++++++++++++++++++ Objects in an Array

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})