const removeDuplicates = (arr)=>{
    const result1 = [...new Set(arr)]
    const result2 = [];
    for(let index=0;index<arr.length;index++){
        if(result2.indexOf(arr[index])===-1){
            result2.push(arr[index])
        }
    }
    console.log(result2)
}
removeDuplicates([1, 2, 3, 4, 1, 1])