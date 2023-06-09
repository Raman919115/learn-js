// every method
const numbers = [2,4,6,8,10];

// using outside callback function
// function isEven(number){
//     return number%2 === 0;
// }
  
// const result = numbers.every(isEven)
// console.log(result);


// using arrow function
// const isEven = numbers.every((num)=>{
//     return num % 2 === 0;
// })
// console.log(isEven);

// callback function return krega true/false(boolean)

// every method bhi true/false(boolean) return krega
// but jo condition h vo har ek element p apply honi chayie

  
// check price is less than 30000
const userCart = [
    {productId : 1, productName : "mobile", price : 12000},
    {productId : 2, productName : "laptop", price : 22000},
    {productId : 3, productName : "tv", price : 15000},
]

const result = userCart.every((cartItem)=> cartItem.price < 30000);
console.log(result);