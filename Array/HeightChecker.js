var heightChecker = function(heights) {
    let sortedheights = [...heights].sort(function(a, b) {
        return a - b;
      });
    let count = 0;
    for(let index=0;index<heights.length;index++){
        if(heights[index]!==sortedheights[index]){
            count++;
        }
    }
    console.log(count)
    
};
heightChecker([10,6,6,10,10,9,8,8,3,3,8,2,1,5,1,9,5,2,7,4,7,7])

