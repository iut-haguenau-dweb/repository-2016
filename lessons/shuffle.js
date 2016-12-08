var cards = [
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
]

function shuffleCards(cards) {
	if (cards.length === 1) {
		return cards;
	}
	var ran = parseInt(Math.random() * cards.length);
	var tmp = cards[ran];
	cards[ran] = cards[0];
	cards[0] = tmp;
	restOfCards = cards.slice(1);
	return [cards[0]].concat(shuffleCards(restOfCards));
}

console.log(shuffleCards(cards));
