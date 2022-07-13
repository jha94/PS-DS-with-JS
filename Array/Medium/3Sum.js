var threeSum = function(nums) {
    if(nums.length<=1)
        return [];
    let currentElement;
    let otherElements = [];
    let result = [];
    for(let index=0;index<nums.length;index++){
        currentElement = nums[index];
        for(let ind1=0;ind1<index;ind1++){
            otherElements.push({[nums[ind1]]:ind1})
        }
        for(let ind2=index+1;ind2<nums.length;ind2++){
            otherElements.push({[nums[ind2]]:ind2})
        }
        for(let index2=index;index2<nums.length-1;index2++){
            if(currentElement+ parseInt(Object.keys(otherElements[index])[0])+parseInt(Object.keys(otherElements[index2])[0])===0){
                result.push([currentElement, parseInt(Object.keys(otherElements[index])[0]), parseInt(Object.keys(otherElements[index2])[0])])
                break;
            }
        }
       
    otherElements=[];
    }
    return result
};
console.log(threeSum([-1,0,1,2,-1,-4]))