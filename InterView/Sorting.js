function sort(arr){
    for(let index=0;index<arr.length;index++){
        for(let index2=index+1;index2<arr.length;index2++){
            if(arr[index]>arr[index2]){
                let temp = arr[index];
                arr[index] = arr[index2];
                arr[index2] = temp;
            }
        }
    }
    console.log(arr)
}

sort([3,2,5,4,1,0])