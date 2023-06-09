// const user1 = {
//   firstName: "harshit",
//   lastName: "vashistha",
//   email: "harhitvashistha@gmail.com",
//   age: 2,
//   address: "House Number, Colony, pincode, state",
//   about: function () {
//     return `${this.firstName} is ${this.age} years old.`;
//   },
//   is18: function () {
//     return this.age >= 18;
//   },
// };
// const aboutUser = user1.about();
// console.log(aboutUser);

// function(that function create object)
// 2.) add key value pair
// 3.) object ko return krega
const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`
    },
    is18 : function(){
        return this.age >= 18;
    }
}
function createUser(firstName , lastName , email , age , address){
    const user = {}
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    return user;
}
const user1 = createUser('harshit','vashsith','harshitvashsith@gmail.com',19,'myaddress')
console.log(user1);
console.log(user1.about()); 
console.log(user1.is18());

const user2 = createUser("harsh","vashisth","harshit@gmail.com",16,"myNew address")
console.log(user2);
console.log(user2.about());
console.log(user2.is18());
