//  primitve vs reference types

// primitive data types  

let num1 = 6;
let num2 = 6;
console.log("value of num1 is",num1);
console.log("value of num2 is",num2);   
num1++;
console.log("after incrementing num1");
console.log("value of num1 is",num1);
console.log("value of num2 is",num2);


// reference data types           -->> phele variable mein jo bhi update hoga wo dusre variable mein hoga
// array

let array1 = ["item1","item2"];
let array2 = array1;
console.log("elements of array1 is",array1);
console.log("elements of array1 is",array2);
array1.push("item3");
console.log("after pushing element to array1");
console.log("after pushing elements of array1 is",array1);
console.log("after pushing elements of array1 is",array2);

    