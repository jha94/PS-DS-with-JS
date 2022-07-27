function Rest(a, b, ...c){
    let result = 0;
    for(arg of c){
        result+=arg
    }
    console.log(result)
}
Rest(1, 2, 3, 4, 5)


// var arr1 = [1, 2, 3];
// var arr2 = [4, 5, 6];
// const arr3 = [...arr1, ...arr2]
// console.log(arr3)

// const name = {fname:'Prashant', lName:'Jha'}
// const name2 = {...name}
// console.log(name2)