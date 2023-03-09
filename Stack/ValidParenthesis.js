var isValid = function(s) {
    const stack = [];
    for(let index=0;index<s.length;index++){
        var c = s.charAt(index);
        switch(c){
            case '(':
                stack.push(')');
                break;
            case '[':
                stack.push(']');
                break;
            case '{':
                stack.push('}');
                break;
            default:
                if(c!=stack.pop()){
                    return false
                }
        }
    }
    return stack.length===0
}

console.log(isValid("(]"))