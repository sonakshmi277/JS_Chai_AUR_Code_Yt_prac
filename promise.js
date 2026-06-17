const p=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async 1 task")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 solved")
})

const p2=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 1")
        resolve("hey")
    },1000)

})
async function consumePromise(ans){
    try{
        const res=await p2
        console.log(res)
    }
    catch(error){
        console.log(error)
    }
}
consumePromise()


//usage of async await to fetch data from an API
async function getInfo(){
    try{
        const res=await fetch('https://jsonplaceholder.typicode.com/users')
        const data=await res.json()
        console.log(data)
    }catch(error){
        console.log(error)
    }
}
getInfo()