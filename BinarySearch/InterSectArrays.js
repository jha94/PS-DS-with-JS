var intersection = function(nums1, nums2) {
    let setNums1 = new Set(nums1);
    let setNums2 = new Set(nums2);
    return [...setNums2].filter(value=>setNums1.has(value));
   };

  console.log(intersection([4,9,5], [9,4,9,8,4]))