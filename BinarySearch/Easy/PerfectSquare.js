var isPerfectSquare = function(num) {
    let left = 0;
    let right = num;
    let result = false
    while(right>=left){
        let mid = Math.floor((left+right)/2);
        if(mid*mid===num){
            return true
        } else if(mid*mid>num){
            right=mid-1
        } else{
            left=mid+1
        }
    }
    return result
};

console.log(isPerfectSquare(16))