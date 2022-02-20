var detectCapitalUse = function(word) {
    console.log(word[0] + word.substr(1).toLowerCase())
    console.log(word === word.toUpperCase() || word === word[0] + word.substr(1).toLowerCase());
};
detectCapitalUse('USA');