var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length-1;
    let result = [-1, -1];
    for(let index=0;index<numbers.length;index++){
        if(numbers[left]+numbers[right]===target){
            result[0] = left;
            result[1] = right
        } else if(numbers[left]+numbers[right]>target){
            right--
        } else{
            left++
        }
    }
    console.log(result);
};

twoSum([2,3,4], 6)