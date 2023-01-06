 function mul(a){
    return function mul2(b){
        return function mul3(c){
            console.log(a+b+c)
        }
    }
 }

 mul(1)(2)(3)
