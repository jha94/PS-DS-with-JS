const FindDisappearedNumbers = (numbers) =>{
    let result = [];
    for(let index=1;index<=numbers.length;index++){
        if(numbers.indexOf(index)===-1){
            result.push(index)
        }
    }
    return result;
}
console.log(FindDisappearedNumbers([1, 1]))