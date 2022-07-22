var defangIPaddr = function(address) {
    const splitted = address.split('')
    let result = '';
    splitted.map(value=>{
    if(value==='.'){
        value='[.]'
    } else{
         value
    }
    result = result.concat(value)
    })
    console.log(result)
};
defangIPaddr('1.1.1.1')