function snake(mat){
    let M = 4;
    let N = 4;
    for(let i =0;i<M;i++){
        if(i%2===0){
            for(let j = 0;j<N;j++){
                console.log(mat[i][j]+" ")
            }
        } else{
            for(let j = N-1;j>=0;j--){
                console.log(mat[i][j]+" ")
            }

        }
    }

}

snake([ [ 10, 20, 30, 40 ],
            [ 15, 25, 35, 45 ],
            [ 27, 29, 37, 48 ],
            [ 32, 33, 39, 50 ] ])