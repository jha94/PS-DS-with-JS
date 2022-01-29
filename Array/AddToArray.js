var addToArrayForm = function(num, k) {
    let number = 0;
    let result = [];
    for(let index=0;index<num.length;index++){
        number = number*10+num[index];
    }
    number+=k;
    // number.toString().split('').forEach((value)=>{
    //     result.push(parseInt(value))
    // })
    console.log(number)
};
addToArrayForm([1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3], 516)