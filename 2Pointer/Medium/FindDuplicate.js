var findDuplicate = function(nums) {
    nums.sort((a, b)=>a-b);
    let left = 0;
    let right = nums.length-1;
    while(left<right){
        if(nums[left]!==nums[right]){
            left++;
            right--
        } else{
            console.log('567890')
            return nums[left]
        }
    }
};

console.log(findDuplicate([1,3,4,2,1]))