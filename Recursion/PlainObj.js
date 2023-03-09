let user = {
    name:'Prashant',
    address: {
        current: {
            city:'Hyderabad'
        },
        permanent: {
            city:'Madhubani',
            area: {
                haat:'Loha'
            }
        }
    }
}

let finalObj = {};

let magic = (obj, prefix) =>{
    for(let value in obj){
        if(typeof obj[value]==='object'){
             magic(obj[value], prefix+'_'+value)
        } else{
            finalObj[prefix+'_'+value] = obj[value]
        }
    }
    return finalObj
}
console.log(magic(user, 'user'));
