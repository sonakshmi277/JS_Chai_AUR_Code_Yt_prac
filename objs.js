const obj1={name:"hello",age:22} //non-singleton object OR obj literal
console.log(obj1["age"]) //name, age everything written on left side is assumed as a string
console.log(obj1.name)
const ch=new Object({name:"heo",age:22}); //singleton obj
console.log(ch.name)
console.log(ch["name"])