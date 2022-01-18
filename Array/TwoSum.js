
var twoSum = function(nums, target) {
    let result = [];
    for(let index=0;index<nums.length;index++){
        for(let ind=index+1;ind<nums.length;ind++){
            if(nums[index]+nums[ind]===target){
                result[0] = index;
                result[1] = ind;
                break;
            }
        }
    }
    return result;
};
twoSum([2,7,11,15], 18);


