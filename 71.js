// methods
// fuction inside object

// const person = {
//     firstName : "harsh",
//     age : 18,
//     about : function(){
//         console.log(`person name is ${this.firstName} and person age is ${this.age}`);
//     }
// }
// person.about();

function personInfo() {
  console.log(`person name is ${this.firstName} and person age is ${this.age}`);
}

const person1 = {
  firstName: "harsh",
  age: 8,
  about: personInfo,
};
const person2 = {
  firstName: "mohit",
  age: 18,
  about: personInfo,
};
const person3 = {
  firstName: "nitish",
  age: 17,
  about: personInfo,
};

person1.about();
person2.about();
person3.about();

   