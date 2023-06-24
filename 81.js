function hello(){
    console.log("hello world");
}
// hello();
// javascript functions ===> function + object
// javascript functions are the combination functions and object

// name property ---> tells function name;
// console.log(hello.name);

// you can add your own properties
// hello.myOwnProperty = "very unique value";
// console.log(hello.myOwnProperty);

//  function provide more useful properties.

// function humein denge free space
// free space ek object {} h
// or us object ko bolte hain prototype


// console.log(hello.prototype);

// only functions provide prototype property

hello.prototype.abc = "abc";
hello.prototype.xyz = "wxy";
hello.prototype.sing = function(){
    return "lalallalala"
}
console.log(hello.prototype);

console.log(hello.prototype.sing());    // call the function