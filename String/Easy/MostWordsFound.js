const mostWordsFound = function(sentences){
    let maximumWords = 0;
    sentences.splice(',').forEach(value=>{
        if(value.split(' ').length>maximumWords){
            maximumWords=value.split(' ').length
        }
    })
    console.log(maximumWords)
}
mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"])