var wordBreak = function(s, wordDict) {
    let val = s;
    wordDict.forEach(value=>{
        if(val.indexOf(value)!==-1){
            val=val.slice(value.length, val.length)
        }
    })
    if(wordDict.indexOf(val)!==-1 || val===''){
        return true
    } else{
        return false
    }
};
 console.log(wordBreak("cars", ["car","ca","rs"]))