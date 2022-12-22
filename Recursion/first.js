const recursion = (x)=>{
    // while(x>0){
    //     console.log(x);
    //     x--
    // }

    if(x>0){
        console.log(x);
        recursion(x-1)
    }
}
recursion(10)