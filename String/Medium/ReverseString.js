var reverseWords = function(s) {
    console.log(s.trim().split(' ').reverse().filter(value=>value!='').join(' '))
};

reverseWords("a good   example")