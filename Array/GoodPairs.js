
var numIdenticalPairs = function(nums) {
    let count = 0;
    for(let index=0;index<nums.length;index++){
        for(let ind=index+1;ind<nums.length;ind++){
            if(nums[index]===nums[ind]){
                count++
            }
        }
    }
    return count;
};
numIdenticalPairs([1, 1, 1, 1]);



