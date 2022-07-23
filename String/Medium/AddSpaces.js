var addSpaces = function(s, spaces) {
    let splittedArray = s.split('');
    spaces.map((value, index)=>{
         value = value+index;
        splittedArray.splice(value, 0, ' ')
    })
    console.log(typeof splittedArray.join(''))
};

addSpaces('LeetcodeHelpsMeLearn', [8,13,15])