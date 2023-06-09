// arrow function 

// const singHappyBirthday = function(){                                                  //function expression
//     console.log("happy birthday to you ......");
// };
// singHappyBirthday();
 
const singHappyBirthday = () =>"happy birthday to you ......";                            //arrow function
console.log(singHappyBirthday());
 

// const sumThreeNumbers = function(num1,num2,num3){                                      //function expression
//     return num1 + num2 +num3;
// }
// console.log(sumThreeNumbers(2,3,5));

const sumThreeNumbers = (num1,num2,num3) => num1 + num2 +num3;                            //arrrow function
console.log(sumThreeNumbers(2,3,5));


// const isEven = function(num){                                                         //function expression                                
//     return num % 2 === 0;
// };
// console.log(isEven(4));

const isEven = (num) => num % 2 === 0;                                                  //arrow function
console.log(isEven(4));                     // agar arrow function mein single paramameter ho to parameter k braces ko hta skte hain.            
                                           // agar ek se jayada parameter ho  ya koi bhi parameter na ho to braces ko nhi h xta skte  



// const strChar = function(str){                                                       //function expression
//     return str[0];
// }
// console.log(strChar("abc"));

const strChar = (str) =>  str[0];                                                       //arrow function
console.log(strChar("abc"));


// const findTarget = function(arr,target){                                             //function expression
//     for(let i=0; i<arr.length;i++){
//         if(arr[i] === target){
//             return i; 
//         }
//     }
//     return -1;      
// }
// console.log(findTarget([1,3,5,2,6,12],6));

// const findTarget = (arr,target) =>{                                                 //arrow function
//     for(let i=0; i<arr.length;i++){
//         if(arr[i] === target){
//             return i; 
//         }
//     }
//     return -1;      
// }
// console.log(findTarget([1,3,5,2,6,12],6));