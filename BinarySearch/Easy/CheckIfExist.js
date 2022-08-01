var checkIfExist = function(arr) {
    // let left = 0;
    // let right = arr.length-1;
    // let result = false;
    // while(right>=left){
    //     let mid = Math.floor((right+left)/2);
    //     if(arr.indexOf(arr[mid]*2)!==-1 || arr.indexOf(arr[mid]/2)!==-1){
    //         return true;
    //     } else{
    //         right=right-1;
    //     }
    // }
    // return result
    let set = new Set();
    for(let value of arr){
        if(set.has(value*2)||set.has(value/2)){
            return true
        } else{
            set.add(value)
        }
    }
    return false
};

console.log(checkIfExist([3,7,1,11]))