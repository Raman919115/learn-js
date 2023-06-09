// some method

// const numbers = [3,5,8,9];

  // check atleast one number is even if even number is not found it returns false
// const result = numbers.some((number)=>number%2 === 0);
// console.log(result);


// check the price of any product is greater than 100000
const userCart = [
    {productId : 1, productName : "mobile", price : 12000},
    {productId : 2, productName : "laptop", price : 22000},
    {productId : 3, productName : "tv", price : 35000},
    {productId : 4, productName : "macbook", price : 250000},
]

const result = userCart.some((userItem)=> userItem.price > 100000 );
console.log(result);