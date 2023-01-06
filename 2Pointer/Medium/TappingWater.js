var maxArea = function(height) {
    let left = 0;
    let right = height.length-1;
    let max = 0;
    while(left<right){
        let vol = Math.min(height[left], height[right])*(right-left);
        max = max>vol?max:vol;
        height[left]>height[right]?right--:left++
    }
    console.log(max)
    
};

maxArea([1,7,8])