// spread operator in array

// const arr1 = [1,2,3];
// const arr2 = [5,6,7];

// const newArr = [...arr1,...arr2];
// console.log(newArr);

// const newArr2 = [..."Raman Sharma"] ;   // we can spread a string in single constter  like from one element to many element
// console.log(newArr2);


// spread operator in object
// const obj = {
//     key1 : "value1",
//     key2  : "value2",
//     key1 :" value59"           //agar object mein do same key ho or unki value different ho to baad vaali value hamesha overwrite kregi pheli wali value ko
//     }     
// console.log(obj);

const obj1 = {
    key1 : "value1",
    key2 : "value2",
};

const obj2 = {
    key3 : "value3",
    key4 : "value4",
    key1 : "newValue"          // agar new object mein do object  ko clone krein or dono mein 
}                             // same key ho to second key ki value hamesha overwrite kregi pheli value ko

// task -->> clone the both objects in a new object

const newObj = {...obj1 , ...obj2, key69: "value69"}      // we can also add a new key value pair when we destructuring objects in new object
console.log(newObj);


const newObj2 = {..."Raman Sharma"};    // we can also destructuring a string in object but after 
console.log(newObj2);                  //  destructuring the string object convert it into key-value pair


const newObj3 = {...["item1","item2"]};   // when we destructure the array in object it convert the elements in values of keys
console.log(newObj3);

 