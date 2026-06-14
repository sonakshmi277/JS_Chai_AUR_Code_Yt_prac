function f1(){
    let h1=12
    console.log(this.h1)
}
f1()

const obj={
    h1:12,
    fu (){
        console.log(this.h1)
    }
}
obj.fu()

const obj2={
    h1:13,
    f:()=>{
        console.log(this.h1)
    }
}
obj2.f()

//"this" refers to object property not to local variable or the object itself

const hg=()=>{
    console.log("heya")
}
hg()