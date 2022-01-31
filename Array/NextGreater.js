var nextGreaterElement = function(nums1, nums2) {
    return nums1.map(n=>{
        let found = nums2.indexOf(n);
        if(found!==-1){
            while(nums2[++found]<n);
            if(found>=nums2.length)
            found = -1
            else
            found = nums2[found]
        }
        return found
    })
};

console.log(nextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7]));
