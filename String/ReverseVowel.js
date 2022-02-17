var reverseVowels = function(s) {
    const totalVowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    const vowels = s.split('').filter((value)=>{
        if(totalVowels.indexOf(value)!==-1){
            return value;
        }
    })
  let result =  s.split('').map(value=>{
      if(totalVowels.indexOf(value)!==-1){
       return value = vowels.pop();
      } else{
          return value
      }
    })
    console.log(s, result.join(''))
   
};
reverseVowels('leetcode')