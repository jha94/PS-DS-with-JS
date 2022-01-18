var shuffle = function(nums, n) {
    let result = [];
    for(let index=0;index<n;index++){
        result.push(nums[index]);
        result.push(nums[index+n])
    }
    return result;
};
shuffle([1,1,2,2], 2)



