var sortSentence = function(s) {
    let result = '';
    for(let index=1;index<s.length;index++){
        if(s.indexOf(index)){
            s.split(' ').forEach(value=>{
                if(value.indexOf(index)!==-1){
                    console.log('index', index)
                    console.log('length', s.split(' ').length)
                    result=result+value.slice(0, -1)+(index<s.length?' ':'')
                }
            })
        }
    }
    console.log(result)
};
sortSentence("is2 sentence4 This1 a3")