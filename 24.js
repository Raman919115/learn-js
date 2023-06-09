// break keyword                  -->> it breaks the loop when condition is fullfill

for(let i=0;i<=10;i++){
    if(i === 5){
        break;
    }
    console.log(i);
}
console.log("the loop is break when condition is fullfill");
 
// continue keyword                  -->> it skip the condition when the condition is fullfill and continue the loop

for(let j = 0; j <= 10;j++){
    if( j === 5){
        continue;
    }
    console.log(j);
}

console.log("the loop is continue when condition is fulfill");