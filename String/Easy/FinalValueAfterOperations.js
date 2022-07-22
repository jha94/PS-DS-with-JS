var finalValueAfterOperations =  function(operations){
    const res = operations.map(value=>{
        if(value.includes('--')){
            return -1
        } else{
            return 1
        }
    })
    console.log(res.reduce((a,b)=>a+b))
}
finalValueAfterOperations(["--X","X++","X++"])