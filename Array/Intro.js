let arr  = [1, 2, 3];
// arr.push(4);
// arr.push(5);
// console.log(arr);
// arr.pop();
// console.log(arr);
// console.log(arr.shift());
// console.log(arr);
// console.log(arr.unshift());
// console.log(arr);

// console.log(arr.slice(0,2));
// console.log(arr)
console.log(arr.splice(0,2,5,6));
console.log(arr)

//-------******COMPLEMENTARY*******--------//

const bio = [
    {firstName:'Prashant', lastName:'Jha', age:29},
    {firstName:'Priyanka', lastName:'Chopra', age:39},
    {firstName:'Donald', lastName:'Trump', age:57},
]

const names = bio.map(value=>{
    return value.firstName+" "+value.lastName
})
console.log(names)

const lessThan40 = bio.filter(value=>{
    if(value.age<40){
        return value
    }
}).map(value=>value.firstName+" "+value.lastName);
console.log(lessThan40);

const ageSum = bio.reduce((first, last)=>{
    first = first+last.age;
    return first;
}, 0);
console.log(ageSum);