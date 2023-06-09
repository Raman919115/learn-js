// fill method          -->>  fill method is used to fill the array by your choice
                           // fill method change the original array
// value , start , end

// crate an array which have 10 elements which all are filled by -1 
// const myArray = new Array(10).fill(-1)       // here new is a keyword which creates a new array
// console.log(myArray);


// change 3,4,5 into 0 from this array
const myArray = [1,2,3,4,5,6,7,8];

const result = myArray.fill(0,2,5)
console.log(result);