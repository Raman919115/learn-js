// splice method           -->> splice method is used to insert or delete from mid of the array
                             // splice method changes the original array returns the deleted item
// start , delete , insert

const myArray = ['item1','item2','item3','item4','item5','item6'];

// for delete
// const deletedItem = myArray.splice(1,3 );
// console.log("deleted item", deletedItem); 
// console.log(myArray); 

// insert  
// myArray.splice(1,0,"inserted item");
// console.log(myArray);

// insert and delete together  -->> it returns the deleted items
const deletedItems = myArray.splice(1,2,"new inserted item")
console.log("deleted item", deletedItems); 
console.log(myArray);   