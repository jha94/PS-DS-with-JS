// var intersection = function(nums1, nums2) {
//     const uniqueIntersection = [];
//     nums2.forEach(value=>{
//         nums1.forEach(val=>{
//             if(value===val && uniqueIntersection.indexOf(value)===-1){
//                 uniqueIntersection.push(value);
//             }
//         })
//     })
//     console.log(uniqueIntersection);
// };

function intersect(nums1 , nums2){
    let setNum1 = new Set(nums1);
    return [...new Set(nums2.filter(num => setNum1.has(num)))];
}

intersection([4,9,5], [9,4,9,8,4])