var rankTeams = function(votes) {
    if(votes.length<2) return votes;
    let unique = votes[0];
    let fullStr = '';
    votes.forEach(value=>{
        fullStr=fullStr+value
    })
    console.log(fullStr)
    console.log(unique)
};
console.log(rankTeams(["ABC","ACB","ABC","ACB","ACB"]));