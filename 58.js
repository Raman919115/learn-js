// filter method     -->> it always gives a new array(but do not change original)
const numbers = [2,3,1,6,4,8]

const isEvenNo =numbers.filter((number)=>
{
   return number % 2 === 0
});
console.log(isEvenNo);
