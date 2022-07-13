function fun(){
    var result = 3;
    var promise = new Promise((myResolve, myReject)=>{
        if(result>=5){
            myResolve(`value is equal to or greater than 5.`)
        } else{
            myReject(`value less than 5.`)
        }
    })
    promise.then(value=>{
        console.log(value)
    }).catch(error=>{
        console.log(error)
    })
}
fun()