const nums=[1,2,3]
const ans=nums.reduce((acc,curr)=>{
    return acc*curr;
},1);

console.log(ans)