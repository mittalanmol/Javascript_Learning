// for in loop

//We can use For in loop for values printing/for iterating over values by Indexes/Keys over Objects and Arrays & Strings 

const myObject={
    js:"javascript",
    cpp:"C++",
    rb:"ruby"
}

for (const key in myObject) {
   console.log(`${key} and it is a shortcut for ${myObject[key]}`); // accessing the value of key using [key]
}

//++++++++++++++++++ Arrays 

const programming=["js","ruby","cpp"]

for (const key in programming) {
    console.log([programming[key]]);  // if we use normal key we will get the indexn as for in loop mostly works on indexes
}

//++++++++++++ Can't iterate Maps