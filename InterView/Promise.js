
fetch(
    "https://sochain.com/api/v2/address/LTC/LMSuo8W7CiXs8oFs1sJh77AQ54tCZM42Ay"
  )
    .then((res) => res.json())
    .then((obj) => console.log('======',obj));

function fun(){
    var result = 6;
    var promise = new Promise((myResolve, myReject)=>{
        let result = fetch(
            "https://jsonplaceholder.typicode.com/todos/1");
        if(result>=5){
            myResolve(result)
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