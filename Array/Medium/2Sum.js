var twoSum = function(numbers, target) {
    let index = 0;
    let index2 = numbers.length-1;
    let result = [-1, -1];
    for(let index3=0;index3<numbers.length;index3++){
        if(numbers[index]+numbers[index2]===target){
            result[0] = index+1;
            result[1] = index2+1;
        } else if(numbers[index]+numbers[index2]>target){
            index2--
        } else{
            index++
        }
    }
    console.log(result)
};

twoSum([2,7,11,15], 9)