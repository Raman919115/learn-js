// clone using Object.assign

const obj = {
  key1: "value1",
  key2: "value2",
};

// const obj2 = {...obj};         //1st method of cloning
const obj2 = Object.assign({},obj)
obj.key3 = "value3"
console.log(obj);
console.log(obj2);


