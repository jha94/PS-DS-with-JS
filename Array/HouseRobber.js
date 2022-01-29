var rob = function(nums) {
    let sum = 0;
    for(let index=0;index<nums.length;index=index+2){
        sum = sum+nums[index];
    }
    
    console.log(sum)
};

rob([1,2,3,1])