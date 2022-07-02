let SingleNumber = (number) =>{
    return number.reduce((prev, next)=>{
        return prev^next
    }, 0)
}
console.log(SingleNumber([4,1,2,1,2]))