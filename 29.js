// how to clone array

// using slice() method

// let array1 = ["item1","item2"];
// let array2 = array1.slice(0);

// array1.push("item3")

// console.log(array1 === array2);  //checks original array or copied array are equal or not
// console.log(array1);
// console.log(array2);


// using blank array 

// let array1 = ["item1","item2"];
// let array2 = [].concat(array1);

// array1.push("item3")

// console.log(array1 === array2);  //checks original array or copied array are equal or not
// console.log(array1);
// console.log(array2);


// using spread operator

// let array1 = ["item1","item2"];
// let array2 = [...array1];

// array1.push("item3")

// console.log(array1 === array2);  //checks original array or copied array are equal or not
// console.log(array1);
// console.log(array2);

// task    -->> get the all element of array1 in array2 and add some more elements in array2

let array1 = ["item1","item2","item3"];
let oneMoreArray =  ["item6","item7","item8"]
let array2 = [...array1,"item4","item5",...oneMoreArray];     // using spread operator we can copy more than one array in existing array

console.log(array1);
console.log(array2);

// how to concatenate two arrays    