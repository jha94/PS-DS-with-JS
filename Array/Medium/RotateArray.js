var rotate = function(nums, k) {
    let left = 0;
    let right = nums.length-1;
    while(left<k){
        nums[left] = nums[right];
        left++;
        right--;
        
    }
    console.log(nums)
};

rotate([1,2,3,4,5,6,7], 3)