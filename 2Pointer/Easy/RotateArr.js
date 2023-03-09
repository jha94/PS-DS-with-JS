var rotate = function(nums, k) {
    k = k%nums.length;
    nums.reverse();
    revNums(nums, 0, k-1)
    revNums(nums, k, nums.length);
    console.log(nums);
}

const revNums = (arr, start, end) =>{
    while(start>end){
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

rotate([-1,-100,3,99], 2)