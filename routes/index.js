'use strict';
const express = require('express');
const router = express.Router();


router.get('/', function(req, res, next) {
	res.render('index', { title: 'Welcome', userId: req.user.id });
});

module.exports = router;