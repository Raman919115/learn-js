// object destructuring

const band = {
    bandName : "led zepplin",
    famousSong : " staireway to heaven",
    year : 1968,
    anotherFamousSong : "kashmir"
}
// create constant/variable from object key-value pair
// const var1 = band.bandName;
// const var2 = band.famousSong;
// console.log(var1 , var2);

// shortcut to create constant/variable from object key-value
// const{bandName,famousSong} = band;
// console.log(bandName , famousSong);             

// if we want to change variable name from key name
// let {bandName : var1 , famousSong : var2} = band;
// console.log(var1 , var2);


// store left key value in another object
const{bandName,famousSong, ...rest} = band;
console.log(rest);