var search = function(nums, target) {
    let left = 0;
    let right = nums.length-1;
    while(left<=right){
        let mid = Math.floor(right+left)/2;
        console.log('=====', mid)
        if(nums[mid]===target){
            return mid
        } else if(nums[mid+1]>target){
            left=mid+1
            
        } else{
            right=mid-1;
        }
}
}

 console.log(search([4,5,6,7,0,1,2],6))