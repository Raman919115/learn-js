// function hello(){
//     console.log("hello world");
// }
// hello.call();
// call apply bind   we learn about these topics

// call method

// const user1 = {
//   firstName: "harshit",
//   age: 8,
//   about: function (hobby, favMusician) {
//     console.log(this.firstName, this.age, hobby, favMusician);
//   },
// };

// // user1.about();

// const user2 = {
//   firstName: "mohit",
//   age: 9,
// };

// user1.about.call(user2, "guitar", "moazart"); // hum jitne chae utne no. of argument use kr skte hain

//  important
// user1.about.call();   agar call method mein hum user2 ko call nhi karein to output mein undefined , undefined dega

// another way to use call method

function about(hobby, favMusician){
  console.log(this.firstName, this.age, hobby,favMusician);
}
const user1 = {
  firstName : "harshit",
  age : 8
}
const user2 = {
  firstName : "mohit",
  age : 9
}
// about.call(user1,"guitar","moazrt");
// about.call(user2,"gui tar","moazrt");


// apply method
// about.apply(user1, ["guitar","bach"])    //apply or call mein jayaada difference nhi h. apply mein hum arrray k andar argument pass krte hain

// bind method
const func = about.bind(user1,"guitar","bach")   // bind returns a function
func();
 

