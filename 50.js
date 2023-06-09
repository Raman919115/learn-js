// block scope vs function scope

// block scope        -->> in block scope variable are accessible only in the block not outside of the block
// function scope     -->> in function scope variable are accessible inside or outside of the block 
// let and const are block scope
{
    let firstName = "harshit";
    console.log(firstName);
}

{
    const firstName = "mohit";
    console.log(firstName);
}

// var is function scope