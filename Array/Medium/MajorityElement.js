var majorityElement = function(nums) {
    if(nums.length<=1) return nums;
    let unique = [];
    let uniqueWithCount = [];
    let max = 0;
    let result = [];
    nums.forEach(value=>{
        if(unique.indexOf(value)===-1){
            unique.push(value)
        }
    })
    unique.forEach(val=>{
        for(let index=0;index<nums.length;index++){
            if(val===nums[index]){
                max++
            }
        }
        uniqueWithCount.push({[val]:max})
        max=0;
    })
    uniqueWithCount.forEach(value=>{
        if(Object.values(value)[0]>(nums.length/3)){
            result.push( parseInt(...Object.keys(value)))
        }
    })
    return result
};
console.log(majorityElement([1, 2]))