var rotate = function(nums, k) {
    let result = [];
    for(let index=nums.length-k;index<nums.length;index++){
        result.push(nums[index]);
    }
    
    for(let index=0;index<nums.length-k;index++){
        result.push(nums[index])
    }
    console.log(result)
};

rotate([1,2,3,4,5,6,7], 3)