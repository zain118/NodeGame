var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var routes = require('./routes/index');
var games = require('./routes/games');
var app = express();
//var db = mongoose.connection;


const uuid = require('uuid');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser());


app.get('*', function(req, res, next){
	let userId = req.cookies.userId;
	if (!userId) {
		userId = uuid.v4();
		res.cookie('userId', userId);
	}
		req.user = {
		id: userId
	};
	next();
})
app.use('/', routes);
app.use('/games', games);

module.exports = app;

app.listen('3000');