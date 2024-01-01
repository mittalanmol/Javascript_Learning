
// Filter 
// Returns the elements of an array that meet the condition specified in a callback function.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums= myNums.filter((num)=>{
    return num>4
})

console.log(newNums);

// If we have to do the same above task without filter then we will use foreach loop like below

const newNums1=[]
myNums.forEach((item)=>{
    if(item>4)
    {
        newNums1.push(item)
    }
})

console.log(newNums1);

//++++++++++++++++ Example to illustrate the concept of filter
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  const userBooks = books.filter((bk)=> bk.genre==="History") //implicut function inside 
  console.log(userBooks); 

  useerBooks = books.filter ((bk)=>{
    return bk.publish >= 1995 && bk.genre==="History"  // curly braces so remember to use return keyword
  })

  console.log(userBooks);
