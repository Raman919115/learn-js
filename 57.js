// map method    -->> it always gives a new array(but do not change original)
const numbers = [3,4,6,1,8];

// const square = function(number){
//     return number * number;          // it's crucial to return when we use map function 
// }                                    // map return mein naya array dega

// const squareNumber = numbers.map(square);
// console.log(squareNumber);


// print the square of given array using function define in map
// const squareNumber = numbers.map(function(number){
//     return number * number;
// });
// console.log(squareNumber);


// print the square of given array using arrow function
// const squareNumber = numbers.map((number)=>{
//     return number * number;
// })
// console.log(squareNumber);
 


const users = [
    {firstName : "harshit", age : 23},
    {firstName : "mohit", age : 21},
    {firstName : "nitish",age : 22},
    {firstName : "garima", age : 20}
]

const userNames = users.map((user)=>{
    return user.firstName;
})
console.log(userNames);