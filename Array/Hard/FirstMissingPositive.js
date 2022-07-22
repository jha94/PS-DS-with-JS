var firstMissingPositive = function(nums) {
    let positiveNumbers = nums.filter(value=>value>0);
    positiveNumbers.sort((a,b)=>a-b)
    let unique = [...new Set(positiveNumbers)];
    var min = 1;
    for(let index=0;index<=unique.length;index++){
        if(unique[index]===min){
            min++
        } else{
            return min;
        }
    }
};
console.log(firstMissingPositive([7,8,9,11,12]))