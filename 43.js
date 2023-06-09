// nested destructuring
const users = [
    {userId: 1,firstName: "harshit", gender: "male"},
    {userId: 2,firstName: "mohit", gender: "male"},
    {userId: 3,firstName: "nitish", gender: "male"}
]

// const [user1,user2,user3] = users;
// console.log(user2);

// destructuring inside nested destructuring to find individual data
const [{firstName:name1 , userId},{firstName},{gender}] = users;      //we can change the variable name
console.log(name1);     // it prints changed varible of firstName which belongs to object 0 inside the array
console.log(userId);    // it prints the userId of object 0
console.log(firstName); // it prints the firstName of object 1
console.log(gender);    // it prints the gender of object 2
