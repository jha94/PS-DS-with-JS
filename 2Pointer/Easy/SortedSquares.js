var sortedSquares = function(nums) {
    let left = 0;
    let right = nums.length-1;
    let result = [];
    while(left<=right){
        result[left] = nums[left]*nums[left];
         result[right]= nums[right]*nums[right];
        left++;
        right--
    }
    console.log(result.sort((a, b)=>a-b))
};

sortedSquares([-7,-3,2,3,11])