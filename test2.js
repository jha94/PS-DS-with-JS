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