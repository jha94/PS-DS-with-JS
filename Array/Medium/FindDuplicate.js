let findDuplicate = (nums) =>{
    let set = new Set();
    for(let index=0;index<nums.length;index++){
        if(set.has(nums[index])){
            return nums[index]
        }
        set.add(nums[index])
    }

}
console.log(findDuplicate([1,3,4,2,2]))
