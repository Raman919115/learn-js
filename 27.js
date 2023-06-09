// arrray push pop

// array shift unshift

let fruits = ["apple","mango","grapes"];
console.log(fruits);

// push   -->>  adds an element at the end of array

// fruits.push("Banana"); 
// console.log(fruits);

// pop    -->>  removes last element of the array

let poppedFruit = fruits.pop();      // -->> when we pop the array it returns the popped element
console.log(fruits);
console.log("popped fruit is",poppedFruit);

// unshift     -->> add elements at beginning of array

fruits.unshift("Banana")
console.log(fruits);

// shift       -->> removes element from beginning of array

let removedFruit = fruits.shift();    // -->>  when we shift the array it returns the shifted element
console.log(fruits);
console.log("removed fruit is",removedFruit);