let longestConsecutive = function(nums) {
    if(nums.length==0) return 0
    let unique = [... new Set(nums.sort((a,b)=>a-b))];
    let first = unique[0];
    let cons = 1;
    let max = 1;
    for(let index=1;index<unique.length;index++){
        if(first+1===unique[index]){
            cons++
            max = max>cons?max:cons
        } else{
            cons = 1;
        }
        first = unique[index];
    }
    return max;  
};

console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))