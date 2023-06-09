// optional chaining

// optional chaining is an error-proof way to access nested objectproperties, even if 
// an intermediate property doesn't exist. the ?. operator is like the . chaining
// operator,except that instead of causing an error if a reference is nullish (null or undefined),
// the expression short-circuits with a return value of undefined.when used with function calls, it 
// returns undefined if the given function does not exist
const user = {
    firstName : "harshit",
    // address : {houseNumber : '1234'}
}


console.log(user?.firstName);
console.log(user?.address?.houseNumber);
