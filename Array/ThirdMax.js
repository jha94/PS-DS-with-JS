var thirdMax = function(nums) {
    const unique = [];
    let highest = nums[0];
    nums.forEach(value=>{
        if(unique.indexOf(value)===-1){
            unique.push(value)
        }
    })
    unique.sort((a, b)=>b-a);
    if(unique.length<3){
        unique.forEach(value=>{
            if(value>highest){
                highest = value
            }
        })
    } else{
        highest = unique[2]
    }
    console.log(highest)
    // console.log(unique)
    // console.log(unique.length<3?unique[unique.length-1]:unique[2])
    
};
thirdMax([3, 2, 1])