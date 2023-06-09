// rest parameters   -->> rest parameter values ko array mein return krega

// function myFunc(a,b,...c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// myFunc(2,3,4,5,6,7,8,9);

function addAll(...numbers){
   let total = 0;
   console.log(Array.isArray(numbers));
   for(let number of numbers){
       total = total + number;
   }
   return total;
}
const sum = addAll(2,3,4,5,6,7)
console.log(sum);