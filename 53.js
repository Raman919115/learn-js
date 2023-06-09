// param destructuring   -->> it is used in object and react

const person = {
  firstName: "harshit",
  gender: "male",
  age: 22,
};

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }
//  printDetails(person);

function printDetails({ firstName, gender, age }) {
  console.log(firstName);
  console.log(gender);
  console.log(age);
}
printDetails(person);
