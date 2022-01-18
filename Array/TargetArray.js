
var createTargetArray = function(nums, index) {
    let result = [];
    for(let ind=0;ind<nums.length;ind++){
        result.splice([index[ind]], 0, nums[ind]);
    }
    return result; 
};
createTargetArray([1,2,3,4,0], [0,1,2,3,0])



