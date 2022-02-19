var checkRecord = function(s) {
    let late = 1;
    let absent = 1;
    s.split('').forEach((value)=>{
        if(value==='A'){
            absent++;
        }
    })
   console.log(s.indexOf('LLL'))
    console.log(late)
};
checkRecord('PPAAALP')