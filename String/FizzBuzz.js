var fizzBuzz = function(n) {
    let result = [];
    for(let index=1;index<=n;index++){
        if(index%5===0&&index%3===0){
            result.push('FizzBuzz')
        } else if(index%5===0){
            result.push('Buzz')
        } else if(index%3===0){
            result.push('Fizz')
        } else{
            result.push(index.toString())
        }
    }
    console.log(result)
};
fizzBuzz(15)