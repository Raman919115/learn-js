// how to iterate object
const person = {
    name : "harshit",
    age : 22,
    "person hobbies" : ["guitar","sleeping","listening music"]
}


// two ways to iterate objects
// 1. for in loop
// 2. Object.keys

// using for in loop

// for(let key in person){                           // to access only key from object
//     console.log(key);
// }

// for(let key in person){                           // to access only value from object
//     console.log(person[key]);
// }

// for(let key in person){                              //to access key-value pair from object
//     console.log(`${key} : ${person[key]}`);         
//     console.log(key,":",person[key]);
// }



// using object.keys
console.log(Object. keys(person ));          // to get the keys from objects
const val = Array.isArray((Object.keys(person)));
console.log(val);

// we can use for of loop   
for(key of Object.keys(person)){
    console.log(person[key]);
}