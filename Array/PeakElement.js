var findPeakElement = function(nums) {
    // let peak=0;
    // for(let index=1;index<nums.length;index++){
    //     if(nums[index]>nums[index-1] && nums[index]>nums[index+1]){
    //         peak = index
    //     }
    // }
    // console.log(peak)
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > nums[i+1])
             return i;
    }
    return nums.length-1;
};
console.log(findPeakElement([2, 3]));