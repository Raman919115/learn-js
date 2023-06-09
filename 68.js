// maps
// map is an iterable

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects


// different between maps and objects 

// objects can only have string or symbol
// as key

// in maps you can use anything as key
// like array, number, string

// object literal
// key -> string
// key -> symbol
// const person = {
//     firstName : "harshit",
//     age : 7,
//     1 : "one"
// }
// console.log(person.firstName);
// console.log(person["firstName"]);
// console.log(person[1]);
// for(let key in person){
     // console.log(key);
//     console.log(typeof key);
// }

  
// creating Map
// key value pair
// const person = new Map();
// person.set('firstName','Harshit');         //set method is used to add key value pair in Map
// person.set('age', 7);
// person.set(1,'one')
// console.log(person);
// console.log(person.get('age'));            //get method is used to access value using key
// console.log(person.keys());                //keys method is used to get all the keys

// for(let key of person.keys()){
//     console.log(key, typeof key);
// }


// add key value pair direct in map
// const person = new Map([["firstName","harshit"],["age",7]]);
// console.log(person);


// create an object whose information is stored anywhwere but not stored in object
const person1 = {
    id : 1,
    firstName : "harshit"
}
const person2 = {
    id : 2,
    firstName : "harsh"
}
const extraInfo = new Map();
extraInfo.set(person1,{age: 8, gender: "male"});
extraInfo.set(person2,{age: 9, gender: "female"});
console.log(person1.id);
console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person2).gender);