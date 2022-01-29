var checkIfPangram = function(sentence) {
    const stringArray = sentence.split('');
    const uniqueChars = [];
    stringArray.forEach((value)=>{
        if(uniqueChars.indexOf(value)===-1){
            uniqueChars.push(value)
        }
    })
    if(uniqueChars.length===26){
        console.log('sentense is pengram')
    } else{
        console.log("sentense isn't pengram")
    }
    // console.log(stringArray); 
    
};
checkIfPangram('leetcode')