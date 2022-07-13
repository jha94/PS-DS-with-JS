var findDuplicates = (nums) =>{
    let set = new Set(nums);
    return nums.filter(value=>{
        if(set.has(value)){
            set.delete(value)
        } else{
            return value
        }
    })
}
console.log(findDuplicates([4,3,2,7,8,2,3,1]))