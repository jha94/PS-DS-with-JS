const countElement = (arr) =>{
const unique = [...new Set(arr)];
let count = 0;
let result = []
unique.forEach(value=>{
    for(let index=0;index<arr.length;index++){
        if(value===arr[index]){
            count++;
        } 
    }
    result.push({[value]:count})
    count=0
})
    console.log(result)
}

countElement([1, 2, 3, 4, 2, 1])