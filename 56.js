// important array methods  -->> high order function

// forEach  -->> forEach naya array nhi dega(original array to mutate krega)
// map
// filter
// reduce

// forEach method

const numbers = [4,2,5,8];

// numbers.forEach(function(number,index){
//     console.log(`index is ${index} and number is ${number*2}`);
// });

// multiply all numbers by 2 and print all
// numbers.forEach(function(number){
//     console.log(`number multiplied by 2 is ${number*2}`);
// });


const users = [
    {firstName : "harshit", age :23},
    {firstName : "mohit", age :21},
    {firstName : "nitish", age :22},
    {firstName : "garima", age :20}
]
// print firstName from objects in users array using forEach
// users.forEach(function(user){
//     console.log(user.firstName);
// });

// using arrow function
// users.forEach((user,index)=>{            //here index is optional 
//     console.log(index,user.firstName);
// })

// print firstName from objects in users array using for of loop
// for(let user of users){
//     console.log(user.firstName);
// };