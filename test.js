// the array is [3, 5, 2, -4, 8, 11] and the sum is 7,
// your program should return [[11, -4], [2, 5]]
// because 11 + -4 = 7 and 2 + 5 = 7.

// check if a string contains a substring that is a palindrome - abcababc

// 1->2->3 (not a palindrome)
// 1->2->1 (palindrome)

// Given an expression string exp,
// write a program to examine whether the pairs and the orders of
// “{“, “}”, “(“, “)”, “[“, “]” are correct in the given expression.

// function getThis() {
//     console.log(this);
//   }

//   const getThis2 = () =>{
//     console.log(this);
//   }
  
//   const obj1 = { name: "obj1" };
  
//   obj1.getThis = getThis;
  
// obj1.getThis();

// obj1.getThis2 = getThis2;
// obj1.getThis2

const obj4 = {
  name: "obj4",
  getThis() {
    return this;
  },
};

const obj5 = { name: "obj5" };

obj5.getThis = obj4.getThis;
console.log(obj5.getThis()); // { name: 'obj5', getThis: [Function: getThis] }
