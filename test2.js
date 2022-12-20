// var search = function(prices) {
//     let buy = prices[0];
//     prices[0] = 0;
//     let profit = 0;
//     for(let index=1;index<prices.length;index++){
//         if(prices[index]<buy){
//             buy = prices[index];
//             prices[index]=0;
//         } else{
//             profit = Math.max(profit, prices[index]-buy)
//         }
//     }
//     return profit;

// };
// console.log(search([7,1,5,3,6,4]))




// var maxArea = function(height) {
//     let left = 0;
//     let right = height.length-1;
//     let max = 0;
//     for(let index=0;index<height.length;index++){
//         let vol = Math.min(height[left], height[right])*(right-left);
//         max = Math.max(max, vol);
//         height[left]<height[right]?left++:right--
//     }
//     return max;
// };

// console.log(maxArea([1,8,6,2,5,4,8,3,7]))



//wrong approach
// setTimeout(()=>{
//     console.log('logout')
// }, 1000)


//a better approach
// setTimeout(logout=()=>{
//     console.log('logout')
// }, 2000)


// {
//     const func = () => console.log(letVar); 
//     let letVar = 3;
//     func(); 
//   }

  // function test() {
  //   var foo = 33;
  //   if (foo) {
  //     let foo = foo + 55;
  //   }
  // }


  
    // console.log(bar);
    // console.log(foo);
    // var bar = 1;
    // let foo = 2;
  

    // var maxProfit = function(prices) {
    //   let buy = prices[0];
    //   prices[0] = 0;
    //   let profit;
    //   for(let index=1;index<prices.length;index++){
    //     if(prices[index]<buy){
    //       buy=prices[index];
    //       prices[index]=0
    //     } else{
    //       profit = Math.max((prices[index]-buy), profit)
    //     }
    //   }
    //   return profit;
    // }
    // maxProfit([7,6,4,3,1])

    // var rotate = function(nums, k) {
    //   k=k%nums.length;
    //   nums.reverse();
    //   revNums(nums, 0, k-1);
    //   revNums(nums, k, nums.length-1);
    //   console.log('nums====', nums)
    // }

    // const revNums = (nums, start, end) =>{
    //   while(start<end){
    //   [nums[start], nums[end]] = [nums[end], nums[start]];
    //   start++;
    //   end--
    //   }
    // }
    // rotate([1,2,3,4,5,6,7], 3)

    var isValid = function(s) {
      const result = [s[0]];
      for(let index=1;index<s.length;index++){
        if((s[index]===')' && result[result.length-1]==='(') || (s[index]==='}' && result[result.length-1]==='{') || (s[index]===']' && result[result.length-1]==='[')){
          result.splice(index-1, 2)
        } else{
          result.push(s[index])
        }
      }
      
    };

    console.log(isValid('(('))