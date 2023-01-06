// the array is [3, 5, 2, -4, 8, 11] and the sum is 7,
// your program should return [[11, -4], [2, 5]]
// because 11 + -4 = 7 and 2 + 5 = 7.

// check if a string contains a substring that is a palindrome - abcababc

// 1->2->3 (not a palindrome)
// 1->2->1 (palindrome)

// Given an expression string exp,
// write a program to examine whether the pairs and the orders of
// “{“, “}”, “(“, “)”, “[“, “]” are correct in the given expression.



var lengthOfLongestSubstring = function(s) {
    let firstPointer = 0;
    let secondPointer = 0;
    let allString = []
    
    while(firstPointer<s.length){
        while(secondPointer<=s.length){
            if(s.split('').slice(firstPointer, secondPointer).join('')!==''){
            allString.push(s.split('').slice(firstPointer, secondPointer).join(''))
            }
            secondPointer++;
        }
        firstPointer++;
        secondPointer=0;
    }
    // getHighest(allString)
    console.log(allString)
};
lengthOfLongestSubstring('abcabcbb')