const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`
    },
    is18 : function(){
        return this.age >= 18;
    },
    sing : function(){
        return 'toon na na na la la';
    },
    song : function(){
        return 'la la la la laaal llaa'
    }
}
function createUser(firstName , lastName , email , age , address){
    const user = Object.create(userMethods);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email
    user.age = age;
    user.address = address;
    return user;
}
const user1 = createUser('harshit','vashsith','harshitvashsith@gmail.com',19,'myaddress')
console.log(user1);
console.log(user1.about()); 
console.log(user1.is18());
console.log(user1.song());

const user2 = createUser("harsh","vashisth","harshit@gmail.com",16,"myNew address")
console.log(user2);
console.log(user2.about());
console.log(user2.is18());
console.log(user2.sing());
console.log(user2.song());
