


// function add(a){
//   return function addNum(b){
//    return a+b;
//     }
//   }

// var sec = add(2);
// console.log(sec(1));

// const unique = (string) =>{
//   return [...new Set([...string.split('')])].join('');
// }
// console.log(unique("AAaaBBbbCCcc"))

// const getResult = (value)=>{
//   const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//   let sum = 0;
//   let string = '';
//   for(let index=0;index<value.length;index++){
//     if(nums.includes(value[index])){
//       sum+=Number(value[index])
//     } else{
//       string+=value[index]
//     }
//   }
//   console.log(sum)
//   console.log(string)
// }

// getResult(['2', '3', 'a', '4', 'b', '5', 'c'])


// const flatArr = (value) =>{
//   const valueStr = String(value).split('')
//   const result = [];
//   for(let index=0;index<valueStr.length;index++){
//     if(valueStr[index]!='['||valueStr[index]!=']'||valueStr[index]!=','){
//       if(Number(valueStr[index])){
//       result.push(Number(valueStr[index]))
//       }
//     }
//   }
//   console.log(result)
// }

// flatArr('[1,2,3,[4,5[6,7,[8]]]]')



// const numsArr = [1, 10, 2, 3, 4];
// console.log(numsArr.sort((a,b)=>a-b)[(numsArr.length-1)-1]);

























// 1 - Print all the keys of this object

// const obj = {
// a:1,
// b:[{c:2,d:3}],
// e:{
// f:{
// g:NaN
// }
// }
// }

// 2 - print all comments

// const comments = [
// {
// comment:'hi',
// replies:[
// {
// comment:'hell0',
// replies:[
// {
// comment:'how are you'
// }
// ]
// }
// ]
// },
// {
// comment: 'something'
// }
// ]





// 5 - write polyfill for Promise.all()




// 7 - deep clone object









// the array is [3, 5, 2, -4, 8, 11] and the sum is 7,
// your program should return [[11, -4], [2, 5]]
// because 11 + -4 = 7 and 2 + 5 = 7.

// check if a string contains a substring that is a palindrome - abcababc

// 1->2->3 (not a palindrome)
// 1->2->1 (palindrome)

// Given an expression string exp,
// write a program to examine whether the pairs and the orders of
// “{“, “}”, “(“, “)”, “[“, “]” are correct in the given expression.
