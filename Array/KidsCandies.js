var kidsWithCandies = function(candies, extraCandies) {
    let result = [];
    let highest = candies[0];
    for(let index=0;index<candies.length;index++){
        if(candies[index]>highest){
            highest = candies[index];
        }
    }
    for(let index=0;index<candies.length;index++){
        if(candies[index]+extraCandies>=highest){
            result.push(true)
        } else{
            result.push(false)
        }
    }
    console.log(result)
};

kidsWithCandies([2,3,5,1,3], 3)