var game = {
  players: [],
  addPlayer: function(name){
  	this.players.push(new playerConstructor(name));
  }
};

function playerConstructor(name){
  player = {};
  player.name = name;
  player.hand = [];
  player.addCard = function(card){
    player.hand.push(card);
  };
  return player;
};

$(document).ready(function() {
	$('#button').click(function() {
		game.addPlayer($('#name').val());
		console.log(game.players);
	});
});
