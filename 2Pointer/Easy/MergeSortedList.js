var mergeTwoLists = function(list1, list2) {
    let left = 0;
    let right = 0;
    let result = []
    if(list1.length===0 && list2.length===0){
        return [];
    } else{
    while(left<list1.length || right<list2.length){
    if(list1[left]>list2[right]){
        result.push(list2[right])
        right++
    } else if(list2[right]>list1[left]){
        result.push(list1[left])
        left++;
    } else{
        result.push(list1[left])
        left++;
        result.push(list2[right])
        right++
    }
}

console.log(result.filter(value=>value!==undefined))
    console.log(result)
    
};

mergeTwoLists([], [])