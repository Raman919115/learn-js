// objects    reference type

// arrays are good but not sufficient
// for real world data
// objects store key value pairs
// objects don't have index

// how to create objects

const person = {
  name: "Harshit",
  age: 22,
  hobbies: ["guitar","sleeping","listening music"]
};
 console.log( person);

// how to access data from objects

console.log(person["name"]);         // access data using bracket notation
console.log(person.name);            // access data using dot notation
console.log(person.age);
console.log(person.hobbies[2]);

// how to add key value pairs to objects 
person["ageGroup"] = 20       // add data using bracket notation
person.gender = "male";       // add data using bracket notation
console.log(person);