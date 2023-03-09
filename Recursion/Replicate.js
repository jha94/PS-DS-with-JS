function replicate(times, number){
    if(times<1) return []
    return [number].concat(replicate(--times, number))
}
console.log(replicate(3, 5));