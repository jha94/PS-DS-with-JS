var detectCapitalUse = function(word) {
    let small = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let result;
    for(let index=0;index<word.length;index++){
       if(small.indexOf(word[index])!==-1){
           result = false;
           break;
       } else{
           result = true
       }
    }
    console.log(result)
};
detectCapitalUse('g');