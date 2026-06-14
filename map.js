const nums=[1,2,3]
const ans=nums.map(nums=>{return nums+1})
//console.log(ans)
//console.log(nums)

function double(num) {
    return num * 2;
}
const anss = nums.map(double);
//console.log(anss);

const a=nums.map((value,index,nums)=>{return {value,index,nums}})   //map can take 3 values in its callback func
console.log(a)