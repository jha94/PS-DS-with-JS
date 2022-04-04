const getFloor = (arr, target)=>{
    let left = 0;
    let right = arr.length-1;
    while(right>=left){
        let mid = Math.floor(left+(right-left)/2);
        if(arr[mid]===target){
            return mid;
        } else if(arr[mid]>target){
            right = mid-1
        } else{
            left = mid+1
        }
    }
    return right;
}

console.log(getFloor([2, 3, 5, 9, 14, 16, 18], 4))