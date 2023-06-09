// intro to arrays        -->> arrays are mutable(array's method can change the original )
// reference type
// how to create arrays

// ordered collection of items

let fruits = ["apple", "mango", "grapes"];
console.log(fruits);

let numbers = [1, 2, 3, 4];
console.log(numbers);

let mixed = [1, 2, 3, "string", null, undefined];
console.log(mixed);

let fruits_1 = ["apple", "mango", "grapes"];
console.log(fruits_1);
fruits_1[2] = "banana";
console.log(fruits_1);

console.log(typeof fruits_1); // to find the type array
console.log(Array.isArray(fruits_1)); // to find the specific type of array

// array indexing
 