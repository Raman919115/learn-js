// for loop in array

// let fruits = ["apple","banana","mango","grapes"];

// for(let i= 0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }


// task  -->>  print all the fruits name one by in upperCase

// let fruits = ["apple","banana","mango","grapes"];

// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i].toUpperCase());
// }


// task  -->> create new array and push all the fruits in upperCase

let fruits = ["apple","banana","mango","grapes"];
let fruits2 = [];
for(let i=0;i<fruits.length;i++){
    fruits2.push(fruits[i].toUpperCase());
}

console.log(fruits2);