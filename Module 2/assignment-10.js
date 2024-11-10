'use strict';
const candidateamount = prompt("Enter the number of candidates.")
let candidates = []
for (let i = 1; i <= candidateamount; i++) {
    let candidatename = prompt("Enter the name of candidate "+i)
    let candidate = {
        name: candidatename,
        votes: 0,
    }
    candidates.push(candidate)
}
const voters = prompt("Enter the number of voters.")
for (let i = 0; i < voters; i++) {
    let candidatename = prompt("Who are you voting for?")
    if (candidatename == "") {

    } else {
        let vote = candidates.find(({name}) => name == candidatename);
        vote.votes += 1;
    }
}
candidates.sort((a,b) => {
    a.votes - b.votes
})
console.log("The winner is " + candidates[0].name + " with " + candidates[0].votes + " votes.")
console.log("results:")
for (let i = 0; i < candidateamount; i++) {
    console.log(candidates[i].name + ": " + candidates[i].votes + " votes")
}