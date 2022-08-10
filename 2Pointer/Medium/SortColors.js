let sortColors = function(nums) {
    let left = 0;
    let right = nums.length-1;
    let result = [];
    while(left<right){
        if(nums[left]>nums[right]){
            result.push(nums[right])
            right--
        } else if(nums[right]>nums[left]){
            result.push(nums[left])
            left++;
        } else{
            result.push(nums[left])
            left++;
            result.push(nums[right])
            right--
        }
    }
    console.log(result)
};

sortColors([2,0,2,1,1,0])