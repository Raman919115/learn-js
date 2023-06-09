// difference between dot and bracket notation
let key = "phone"; 
const person = {
    name: "Harshit",
    age: 22,
    "my hobbies": ["guitar","sleeping","listening music"]
  };

// console.log(person["my hobbies"]);    // using bracket notation we can access double word key 
// console.log(person.my hobbies);       // using dot notation we can't access double word key 


// create a key value pair in person object which access key from a variable
person.email = "harshithvashisth@gmail.com";    // create new key value pair without accesing variable           using dot notation 
person[key] = 1234566789;                  //  crate new key value pair which access key from a variable     using bracket notation   
console.log(person); 