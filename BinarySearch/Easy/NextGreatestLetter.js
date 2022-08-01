function NextGreatestLetter(letters, target){
    let left = 0;
    let right = letters.length-1;
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(target>letters[mid]){
            left = mid+1
        } else{
            right=mid-1
        }
    }
    return letters[left%letters.length]
}
 console.log(NextGreatestLetter(["c","f","j"], 'a'))