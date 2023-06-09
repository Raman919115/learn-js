// array destructuring

// normal method
// const myArray = ["value1","value2"];
// let ver1 = myArray[0];
// let ver2 = myArray[1];
// console.log("value of ver1 is",ver1);
// console.log("value of ver2 is",ver2);


// using destructuring
// const myArray = ["value1","value2"];
// let [ver1,ver2,ver3] =myArray;         // we can use these variable as normal variable.
// ver2 = "changed value";                
// console.log("value of ver1 is",ver1);
// console.log("value of ver2 is",ver2);
// console.log("value of ver3 is",ver3);


// if we want to print value3 in ver3
// const myArray = ["value1","value2","value3"];
// let [ver1, ,ver2] = myArray;
// console.log("value of ver1 is",ver1);
// console.log("value of ver2 is",ver2); 


// make new array from existing array  using slice() method
// const myArray = ["value1","value2","value3","value4","value5"];
// myNewArray =myArray.slice(2)
// console.log(myNewArray);



// make new array from existing array using array Deststructuring
const myArray = ["value1","value2","value3","value4","value5"];
let [var1,var2,...newArray] = myArray;
console.log("value of var1",var1);
console.log("vlaue of var2",var2);
console.log(newArray);

