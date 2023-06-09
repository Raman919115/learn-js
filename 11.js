// undefined     -->> variable declare krne k baad value assign nhi ki jaati 

let firstName;          
console.log(firstName);
firstName = "harshit"
console.log(typeof firstName , firstName);   //  we an print more than 1 things in console.log
 
// null

let myVariable = null;
console.log(myVariable);
myVariable = "harshit"                             // in null you assign another value in it later
console.log(typeof myVariable , myVariable);
console.log(typeof null);                         // it returns object ,this is a bug in javascript


// BigInt         -->> it stores integers greater than number . it is a new data type

let myNumber = BigInt(123);     // 1st method to create BigInt
let sameNumber = 12n            // 2nd method to create BigInt
console.log(Number.MAX_SAFE_INTEGER)          // this method tells you to how much store safe integer in number

console.log(myNumber + sameNumber)  //you can perform certain operations between  BigInt 
console.log(myNumber + 22n);        // like this
// console.log(myNumber + 11);      // it gives an error when you perform operations between two different data type
