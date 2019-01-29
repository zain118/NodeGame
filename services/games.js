'use strict';
const games = [];
let nextId = 1;
class Game {
	constructor(id, setBy, word) {
	this.id = id;
	this.setBy = setBy;
	this.word = word.toUpperCase();
	}
	positionsOf(character) {
		let positions = [];
		for (let i in this.word) {
			if (this.word[i] === character.toUpperCase()) {
				positions.push(i);
			}
		}
		return positions;
	}
}
module.exports.create = (userId, word) => {
	
	const newGame = new Game(nextId++, userId, word);
	games.push(newGame);
	return newGame;
}
module.exports.get =(id) => {
	return games.find(game => game.id === parseInt(id, 10));
}

module.exports.getAll = ()=>{
	return games;
}

module.exports.deleteG = (id)=>{
	let game = games.find(game => game.id === parseInt(id, 10));
	var index = games.indexOf(game);
	if (index > -1) {
	  games.splice(index, 1);
	}
	return true;
}