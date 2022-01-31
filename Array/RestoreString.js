var restoreString = function(s, indices) {
    let result=[];
    let splitString = s.split('');
    for(let index=0;index<indices.length;index++){
        result[indices[index]] = splitString[index];
    }
    console.log(result.join(''))

    
};

restoreString("codeleet", [4,5,6,7,0,2,1,3])