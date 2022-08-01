const searchInsertPosition = function(nums, target){
    let left = 0;
    let right = nums.length-1;
    while(right>=left){
        let mid = Math.floor((right+left)/2);
        if(target===nums[mid]){
            return mid;
        } else if(target>nums[mid]){
            left=mid+1
        } else{
            right=mid-1
        }
    }
    return left
}
 console.log(searchInsertPosition([1,3,5,6], 7))