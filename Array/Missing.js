var missingNumber = function(nums) {
    let missingNumber;
    if(nums.indexOf(0)===-1){
        missingNumber = 0;
    }
    else if(nums.length>1){
    nums.sort();
    for(let index=0;index<nums.length;index++){
        for(let ind=index+1;ind<nums.length;ind++){
            if(nums[index]+1!=nums[ind]){
                missingNumber = nums[index]+1;
                break;
            } else{
                missingNumber = nums[ind]+1;
                break;
            }
        }
    }
} else{
    missingNumber = nums[0]+1;
}
    console.log(missingNumber)
};
missingNumber([9,6,4,2,3,5,7,0,1])