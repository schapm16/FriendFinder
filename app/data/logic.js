var friends = require('./friends.js');

function logic(newPerson) {
  var diff;
  var bestMatch = { name: '', diff: 100 };
  var bestFriend = {};

  console.log(newPerson);

  for (var i = 0; i < friends.length; i++) {
    diff = 0;

    for (var j = 0; j < 10; j++) {
      diff = diff + (Math.abs(parseInt(friends[i]['scores'][j]) - parseInt(newPerson.scores[j])));
    }

    if (diff < bestMatch.diff) {
      bestMatch = { name: friends[i]['name'], diff: diff };
      bestFriend = friends[i];
    }
  }
  
  friends.push(newPerson);

  return bestFriend;
}

module.exports = logic;
