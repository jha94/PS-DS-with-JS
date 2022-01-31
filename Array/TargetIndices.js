var targetIndices = function(nums, target) {
    let sortedNums = nums.sort((a, b)=>{
        return a-b;
    })
    let indices = [];
    sortedNums.forEach((value, index)=>{
        if(value===target){
            indices.push(index)
        }
    })
    console.log(indices)
    
};
targetIndices([1,2,5,5,5], 5)