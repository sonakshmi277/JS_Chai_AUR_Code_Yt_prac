const p=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async 1 task")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 solved")
})