var countMatches = function(items, ruleKey, ruleValue) {
    const result = [];
    if(ruleKey==='type'){
        for(let index=0;index<items.length;index++){
                if(items[index][0]===ruleValue){
                    result.push(items[index])
                }
        }
}
else if(ruleKey==='color'){
    for(let index=0;index<items.length;index++){
            if(items[index][1]===ruleValue){
                result.push(items[index])
            }
    }
}
 else{
    for(let index=0;index<items.length;index++){
            if(items[index][2]===ruleValue){
                result.push(items[index])
            }
    }

 }
 console.log(result);

}

countMatches(
    [
        ["phone","blue","pixel"],
        ["computer","silver","lenovo"],
        ["phone","gold","iphone"],
    ],
'color',
'silver'
)