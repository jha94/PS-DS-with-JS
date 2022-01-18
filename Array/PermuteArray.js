
var buildArray = function(nums) {
    let result = [];
    for(let index=0;index<nums.length;index++){
        result.push(nums[nums[index]]);
    }
    return result;
};
buildArray([5,0,1,2,3,4])





