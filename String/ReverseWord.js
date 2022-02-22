var reverseWords = function(s) {
    
    console.log(s.split(' ').map(value=>value.split('').reverse().join('')).join(' '));
    
};
reverseWords("Let's take LeetCode contest")