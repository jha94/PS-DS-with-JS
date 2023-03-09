
const contains = (obj, value) =>{
    for(let key in obj){
        if( typeof obj[key]==='object'){
           return contains(obj[key], value)
        } if(obj[key]===value){
         return obj[key]===value
        }
    }
}


var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

const result = contains(nestedObject, 'foo2');
console.log(result)