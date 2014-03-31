function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}

Game.prototype.PAIRS = {
  rock:     { beats: ['scissors', 'lizard']},
  paper:    { beats: ['rock', 'spock']},
  scissors: { beats: ['paper', 'lizard']},
  lizard:   { beats: ['paper', 'spock']},
  spock:    { beats: ['rock', 'scissors']}, 
}

Game.prototype.winner = function() { 
  if(this._samePick()) {
    return null;
  }
  if (this.contains(this.PAIRS[this.player1.pick]['beats'], this.player2.pick)) {
    return this.player1;
  }
  else {
    return this.player2;
  }
}

Game.prototype._samePick = function() {
  return this.player1.pick == this.player2.pick;
}

Game.prototype.contains = function(options, pick) {
  var i = options.length;
  while (i--) {
    if (options[i] === pick) {
      return true;
    }
  }
  return false;
};

function Player(name) {
  this.name = name;
}

Player.prototype.picks = function(pick) {
  this.pick = pick;
}