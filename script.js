var createPoliticians = function(name, partyColor) {
  var politician = {};
   politician.name = name;
   politician.results = null;
   politician.totalVotes = 0;
   politician.partyColor = partyColor;

  //function for tallying results
  politician.talliedUpVotes = function() {
    this.totalVotes = 0;
    for (var i = 0; i < this.results.length; i++) {
      this.totalVotes = this.totalVotes + this.results[i];
    }
  };
return politician;
};



 var patrick = createPoliticians('Patrick', [44, 60, 100]);
 patrick.results = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4,8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
 
 var david = createPoliticians('David', [24, 27, 31]);
 david.results = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

 //function for set state results
 var setStateResults = function(state) {
  theStates[state].winner = null;

  if (patrick.results[state] > david.results[state]) {
    theStates[state].winner = patrick; 
  } else if (patrick.results[state] < david.results[state]) {
    theStates[state].winner = david;
  }

  var stateWinner = theStates[state].winner;
  if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.partyColor;
  } else {
    theStates[state].rgbColor = [255, 255, 255];
  }

  // Declaring it all
stateName.innerText = theStates[state].nameFull;
stateAbbr.innerText = "(" +theStates[state].nameAbbrev + ")";

candidateName.innerText = patrick.name;
candidateName2.innerText = david.name;

candidateStateResults.innerText = patrick.results[state];
candidateStateResults2.innerText = david.results[state];

if (theStates[state].winner === null) {
candidateWinner.innerText = 'Draw'; 
} else {
candidateWinner.innerText = theStates[state].winner.name;
}


};
 
//declaring the winner
patrick.talliedUpVotes();
david.talliedUpVotes();
var winner = ''; 
if (patrick.totalVotes > david.totalVotes) {
  winner = patrick.name;
}
else if (patrick.totalVotes < david.totalVotes) {
  winner = david.name;
} else {
winner = 'It\'s a draw!';
}

console.log('And the winner is ... ' + winner + '!');



// updated results
patrick.results[9] = 1;
david.results[9] = 28;
patrick.results[4] = 17;
david.results[4] = 38;
patrick.results[43] = 11;
david.results[43] = 27;

// Announcing winners
var countryResults = document.getElementById('countryResults');
var countryRow = countryResults.children[0].children[0];
countryRow.children[0].innerText = patrick.name;
countryRow.children[1].innerText = patrick.totalVotes;
countryRow.children[2].innerText = david.name;
countryRow.children[3].innerText = david.totalVotes;
countryRow.children[5].innerText = winner;

// State Results on Map Hover
var stateInfoTable = document.getElementById('stateResults');
var stateHeader = stateInfoTable.children[0];
var stateBody = stateInfoTable.children[1];
var stateName = stateHeader.children[0].children[0];
var stateAbbr = stateHeader.children[0].children[1];


var candidateName = stateBody.children[0].children[0];
var candidateStateResults = stateBody.children[0].children[1];
var candidateName2 = stateBody.children[1].children[0];
var candidateStateResults2 = stateBody.children[1].children[1];

var candidateWinner = stateBody.children[2].children[1];



