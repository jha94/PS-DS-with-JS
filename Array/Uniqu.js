

var singleNumber = function(nums) {
    return nums.reduce((prev, curr) => {
        return prev ^ curr
    },0);
};
console.log(singleNumber([4,1,2,1,2]));