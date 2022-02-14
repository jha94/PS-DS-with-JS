var lengthOfLastWord = function(s) {
    const words = s.trim().split(' ');
   console.log(words[words.length-1])
};
lengthOfLastWord("Hello World")