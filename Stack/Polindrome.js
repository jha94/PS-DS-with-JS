const word = 'racecar';
let wordsInArr = [];
let rword='';
for(let index=0;index<word.length;index++){
    wordsInArr.push(word[index])
}
for(let index=0;index<word.length;index++){
    rword+=wordsInArr.pop()
}

if(word===rword){
    console.log(`${word} is polindrome`);
} else{
    console.log(`${word} is not polindrome`);
}
