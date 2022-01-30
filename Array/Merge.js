var merge = function(nums1, m, nums2, n) {
   let ind =m;
    for(let index=0;index<n;index++){
        nums1[ind]=nums2[index];
        ind++
    }
    console.log(nums1);
};

merge([1,2,3,0,0,0], 3, [2,5,6], 3)