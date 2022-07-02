var MissingNumber = (number)=>{
    let length = number.length;
    let nNaturalNumSum = (length*(length+1))/2
    let totalSum = number.reduce((prev, current)=>{
        return prev+current
    }, 0)
return nNaturalNumSum-totalSum;
}
console.log(MissingNumber([3, 0, 1]));