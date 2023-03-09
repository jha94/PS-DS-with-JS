var removeDuplicates = function(nums) {
    let left = 0;
    right = 1;
    for(let index=0;index<=nums.length;index++){
        if(nums[left]===nums[right]){
            nums.splice(right, 1)
            ++right
        }
        left=index
    }
    console.log(nums);
};

removeDuplicates([0,0,0,0,0,0,0,1,1,1,1,2,2,3,3,4])