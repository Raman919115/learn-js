// and(&&) operator  -->> both conditions should be true to execute final condition 

let firstName = "Harshit";
let age = 22;

// if(firstName[0] === "H" && age >18){
//     console.log("Name starts with H and above 18")
// }


    
// or(||) operator   -->> atleast one condition should be true to execute final condition

if (firstName[0] === "h" || age > 18) {
    console.log("inside if")
}else{
    console.log("inside else")
}