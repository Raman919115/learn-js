// arrow functions    

// arrow functions ka khud ka this nhi hota ye apne surrounding ke ek level uper ko this lete hain
// arrow functions this apne surrounding se leta hai
// arrow functions ke this ko change nhi kr skte
const user1 = {
    firstName : "harshit",
    age : 8 ,
    about : () => {
        console.log(this.firstName , this.age);
    }
}

user1.about( );    // ye output mein undefined undefined dega




