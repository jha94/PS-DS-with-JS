var findRestaurant = function(list1, list2) {
    let commonRestro = [];
    for(let index=0;index<list1.length;index++){
        for(let ind=0;ind<list2.length;ind++){
            if(list1[index]===list2[ind]){
                commonRestro.push(list1[index])
                break;
            }
        }
        break;
    }
    console.log(commonRestro)
    
};

findRestaurant(
    ["Shogun","Tapioca Express","Burger King","KFC"],
    ["KFC","Shogun","Burger King"]
    )