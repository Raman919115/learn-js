// nested if else

 let winningNumber = 19;
 let userGuess = +prompt("Guess a Number");

 if(userGuess === winningNumber){
    console.log("Your guess is right !!");
 }else{
    if(userGuess > winningNumber){
        console.log("too high !!");
    }else{
        console.log("too low !!");
    }
 }