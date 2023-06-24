// const userMethods = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old.`
//     },
//     is18 : function(){
//         return this.age >= 18;
//     },
//     sing : function(){
//         return 'toon na na na la la';
//     }
// }
function createUser(firstName, lastName, email, age, address) {
  const user = Object.create(createUser.prototype);
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  return user;
}
createUser.prototype.about = function () {
    return `${this.firstName} is ${this.age} years old .`;
  };
  createUser.prototype.is18 = function () {
    return this.age >= 18;
  };
  createUser.prototype.sing = function () {
    return "toon na na na la la";
  }; 

const user1 = createUser("harshit","vashsith","harshitvashsith@gmail.com",19,"myaddress");
const user2 = createUser("harsh","vashisth","harshit@gmail.com",16,"myNew address");
const user3 = createUser("mohit","vashistha","harshit3@gmail.com",20,"addresss3");
console.log(user1);
console.log(user1.about());
console.log(user1.is18());




