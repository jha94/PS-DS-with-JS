var isPalindrome = function(s) {
    var strippedString = s.replace(/\W/g, '');
    var reversedString = strippedString.split('').reverse().join('');
    return strippedString.toLowerCase() == reversedString.toLowerCase(); 
};
isPalindrome('A man, a plan, a canal: Panama');