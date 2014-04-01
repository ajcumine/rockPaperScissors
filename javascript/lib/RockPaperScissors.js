function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}

Game.prototype.PAIRS = {
  rock:     { beats: ['scissors', 'lizard'], scissors: 'crushes', lizard: 'crushes'},
  paper:    { beats: ['rock', 'spock'], rock: 'covers', spock: 'disproves'},
  scissors: { beats: ['paper', 'lizard'], paper: 'cut', lizard: 'decapitates'},
  lizard:   { beats: ['paper', 'spock'], paper: 'eats', spock: 'poisons'},
  spock:    { beats: ['rock', 'scissors'], rock: 'vaporises', scissors: 'smashes'}, 
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

Game.prototype.loser = function() {
  if(this.winner() === this.player1) {
    return this.player2;
  }
  if(this.winner() === this.player2) {
    return this.player1;
  }
  else {
    return null;
  }
}

Game.prototype.message = function() {
  if(this._samePick()) {
    return 'Draw';
  }
  else {
    return this.winner().pick + ' ' + this.PAIRS[this.winner().pick][this.loser().pick] + ' ' + this.loser().pick;
  }
};

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