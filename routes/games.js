'use strict';
const express = require('express');
const router = express.Router();
const service = require('../services/games');

router.post('/', function(req, res, next) {
	
	const word = req.body.word;
	if (word && /^[A-Za-z]{3,}$/.test(word)) {
		service.create(req.cookies.userId, word);
		res.redirect('/');
	} else {
		res.status(400).send('Word must be at least three characters long and contain only letters');
	}
});

const checkGameExists = function(id, res, callback) {
	const game = service.get(id);
	if (game) {
		callback(game);
	} else {
		res.status(404).send('Non-existent game ID');
	}
}
router.get('/all', function(req, res, next) {
	
	var data = service.getAll();
	res.render('AllGames', {data: data});
	
});
router.delete('/:id', function(req, res, next) {
	debugger;
	let gameId = req.params.id;
	checkGameExists(gameId,res,(game) => {
		debugger;
		service.deleteG(game.id);
		res.redirect('/games/all');
	});
	
});
router.get('/:id', function(req, res, next) {
	
	checkGameExists(req.params.id,res,(game) => {
		
		res.render('game', {
			length: game.word.length,
			id: game.id
		});
	});
});
router.post('/:id/guesses', function(req, res, next) {
	checkGameExists(req.params.id,res,(game) => {
		res.send({
			positions: game.positionsOf(req.body.letter)
			});
		}
	);
});

module.exports = router;