function Card(suit, val) {
	this.suit = suit;
	this.val = val;
}

function Deck() {
	this.cards = [];
	this.reset()
};

Deck.prototype.reset = function() {
	var suits = ["Club", "Heart", "Spade", "Diamond"];
	for (var suit of suits) {
		for (var val = 1; val <= 13; val++) {
			this.cards.push(new Card(suit, val));
		}
	}
};

Deck.prototype.shuffle = function() {
	for (var idx = 0; idx < this.cards.length; idx++) {
		var temp = this.cards[idx];
		var swap = Math.floor(Math.random() * (this.cards.length - 1)) + 1;
		this.cards[idx] = this.cards[swap];
		this.cards[swap] = temp;
	}
	return this;
};

Deck.prototype.deal = function() {
	return this.cards.pop();
};

function Player(name) {
	this.name = name;
	this.hand = [];
	this.draw = function(deck){
		this.hand.push(deck.deal());
	}
};

Player.prototype.discard = function() {
	this.hand.pop();
	return this;
};


// var newDeck = new Deck();
// var arnold = new Player("arnold");
// console.log(newDeck.shuffle());
// arnold.draw(newDeck);

// arnold.draw(newDeck);arnold.draw(newDeck);arnold.draw(newDeck);arnold.draw(newDeck);arnold.draw(newDeck);
// console.log(arnold.hand)
// arnold.discard()
// console.log(arnold.hand)