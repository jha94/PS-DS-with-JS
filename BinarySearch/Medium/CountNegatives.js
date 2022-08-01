var countNegatives = function(grid) {
    let count = 0;
    grid.flat().forEach(value=>{
        if(value<0){
            count++
        }
    })
    console.log(count)
    
};

countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]])