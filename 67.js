// Sets (it is iterable)
// store data
// sets also have its own methods
// No index-based access
// Order is not guaranteed
// unique items only (no duplicates allowed)

// const numbers = new Set([1,2,3, 3])        // unique items only (no duplicates allowed)
// console.log(numbers);

// const numbers = new Set([1,2,3, 3])          // No index-based access
// console.log(numbers[2]);
const items = ['item1','item2','item3'];
const numbers =  new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(6);
// numbers.add(items); 
// numbers.add(['item1','item2']);  //we can add two same array in set but both are individual created
// numbers.add(['item1','item2']);   
// if(numbers.has(1)){
//     console.log("1 is present");
// }else{
//     console.log("1 is not present");
// }
// for(let number of numbers){
//     console.log(numbers);
// }
// console.log(numbers);
const myArray = [1,2,4,4,5,4,5,6,5,6];
const uniqueElements = new Set(myArray);
console.log(uniqueElements); 

// find the length of given set
let length = 0;
for(let element of uniqueElements){
    length++;
}
console.log(length);