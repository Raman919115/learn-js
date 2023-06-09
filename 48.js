// functions inside function
const app = () =>{
    const myFunc = () =>{
        console.log("hello from myFunc");
    }

    const addTwo = (num1 , num2) =>{
        return num1 + num2;
    }

    const mul = (number1, number2) => number1 * number2;
    console.log("inside app");
    myFunc();
    console.log(addTwo(2,3));
    console.log(mul(2,3));
}
app();
 