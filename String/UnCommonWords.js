var uncommonFromSentences = function(s1, s2) {
    let s1s2 = [...s1.split(` `), ...s2.split(` `)];
    let ans = [];
  
    for (let word of s1s2) {
      if (s1s2.indexOf(word) == s1s2.lastIndexOf(word)) ans.push(word);
    }
    return ans;
};
uncommonFromSentences("this apple is sweet", "this apple is sour")