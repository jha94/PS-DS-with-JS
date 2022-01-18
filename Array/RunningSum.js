
var runningSum = function(nums) {
    var lastSum = nums[0];
    var num = [nums[0]];
    for(let index=1;index<nums.length;index++){
        lastSum +=nums[index];
        num.push(lastSum) 
        continue;
    }
    return num;
};
runningSum([1,1,1,1,1]);



