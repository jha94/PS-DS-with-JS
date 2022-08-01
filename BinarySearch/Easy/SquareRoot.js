var mySqrt = function(x) {
    let left = 0;
    let right = x;
    while(right>=left){
        let mid = Math.floor((left+right)/2);
        if(mid*mid===x){
            return mid
        } else if(mid>x){
            left=mid+1
        } else{
            right=mid-1;
        }
    }
    return right;
    
};

console.log(mySqrt(4))