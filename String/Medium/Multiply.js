

let user = {
    name:'Prashant',
    address: {
        Personal: {
            city: 'hyderabad',
            area:'Hitec city'
        },
        office: {
            city:'Hyderabad',
            area: {
                landmark:'Dwarka Signature'
            }
        }
    }
}

let finalObj = {};

let magic = (obj, parent) =>{
    for(let key in obj){
        if(typeof obj[key]==='object'){
            magic(obj[key], parent+'_'+key)
        } else{
            finalObj[parent+'_'+key] = obj[key]
        }
    }
    console.log(finalObj)
}

magic(user, 'user')