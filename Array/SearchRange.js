var searchRange = function(nums, target) {
    let result = [-1, -1];
    for(let index=0;index<nums.length;index++){
        if(nums[index]>target)
        return result;
        if(nums[index]===target){
            if(result[0]===-1){
                result[0] = index;
            }
            result[1] = index;
        }
    } 
};

searchRange([5,7,7,8,8,10], 8)