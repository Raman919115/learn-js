// find method

const myArray = ["Hello","cat","dog","lion"];

// using outside calback function
// function isLength(string){
//     return string.length === 3;
// };
// const result = myArray.find(isLength)
// console.log(result);


// using arrow function
// const resultArray = myArray.find((str)=>{
//     return str.length === 3;
// });
// console.log(resultArray);


const users = [
    {userId : 1, userName : "harshit"},
    {userId : 2, userName : "harsh"},
    {userId : 3, userName : "nitish"},
    {userId : 4, userName : "mohit"},
    {userId : 5, userName : "aaditya"},
];

const myUser = users.find((user)=>{
    return user.userId === 3
})
console.log(myUser); 