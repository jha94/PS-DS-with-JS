var searchRange = function(nums, target) {
    let result = [-1, -1];
    let firstIndex = getIndex(nums, target, true)
    let lastIndex = getIndex(nums, target, false)
    result[0] = firstIndex;
    result[1] = lastIndex;
    return result
}

let getIndex = function(nums, target, isFirst){
    let left = 0;
    let right = nums.length-1;
    let index = -1;
    while(left>=right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid]===target){
            index=mid;
            isFirst?right=mid-1:left=mid+1
        } else if(nums[mid]>target){
            right=mid-1
        } else{
            left=mid+1
        }
    }
    return index;
}
searchRange([5,7,7,8,8,10], 8)