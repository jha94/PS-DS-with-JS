function BinarySearch(arr, target){
    let left = 0;
    let right = arr.length-1;
    while(right>=left){
        let mid = Math.floor((left+right)/2);
        if(arr[mid]===target){
            return mid
        } else if(arr[mid]>target){
            right=mid-1
        } else{
            left=mid+1
        }
    }
    return -1;
}
console.log(BinarySearch([-1,0,3,5,9,12], 9))