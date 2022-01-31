var firstPalindrome = function(words) {
    let polindromeWord = '';
    for(let index=0;index<words.length;index++){
        let word = words[index].split('');
        if(word.join('')===word.reverse().join('')){
            polindromeWord = words[index];
            break;
        }
    }
    console.log(polindromeWord)
    
};
firstPalindrome(["abc","car","ada","racecar","cool"])