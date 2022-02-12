var canJump = function(nums) {
if(nums.length<=1) return true;
let max = 0;
let current = nums[1];
for(let index=1;index<nums.length;index=index+current){
    max+=nums[index]
}
return max>=nums.length;
    
};

console.log(canJump([0]));