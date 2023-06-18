// const user = {
//     firstName : "harshit",
//     age : 8,
//     about : function(){
//         console.log(this.firstName,this.age);
//     }
// }

const user = {
    firstName : "harshit",
    age : 8,
    about(){
        console.log(this.firstName,this.age);
    }
}

user.about()