//Immediately invoked function expression
(function(){
    console.log("HI")
})();

(()=>{
    console.log("Hello")
})();

((name)=>{
    console.log(`welcome ${name}`)
})("sona")