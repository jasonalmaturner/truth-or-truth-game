var express = require('express'),
	bodyParser = require('body-parser'),
	app = express(),
	session = require('express-session'),
	cors = require('cors'),
	mongoose = require('mongoose'),
	passport = require('passport'),
	FacebookStrategy = require('passport-facebook').Strategy,
	User = require('./server-assets/users/userModel'),
	Game = require('./server-assets/game/gameController'),
	userController = require('./server-assets/users/userController');


app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use(session({secret: 'quando omni flunkus moritati'}));
app.use(passport.initialize());
app.use(passport.session());

// Move some of this to the userController?
// Change callbackURL?
passport.use(new FacebookStrategy({
	clientID: '626195034163705',
	clientSecret: '49d3d82ad4dba3545189e631458e55d0',
	callbackURL: 'http://localhost:9011/auth/facebook/callback'
}, function(token, refreshToken, profile, done){
	User.findOne({'facebookId': profile.id}, function(err, user) {
		if(err){
			return done(err);
		} if (!user) {
			var user = new User({
				name: profile.displayName,
				// email: profile.emails[0].value,
				username: profile.username,
				provider: 'facebook',
				facebook: profile._json,
				facebookId: profile.id
			});
			user.save(function(err){
				if (err) console.log (err);
				return done(err, user);
			});
		} else {
			return done(err, user);
		}
	});
}));

passport.serializeUser(function(user, done){
	done(null, user.id);
});

passport.deserializeUser(function(id, done){
	User.findById(id).populate('game.ref').exec(function(err, user) {
		done(err, user);
	})
});

// var authenticateUser = function(req, res, next) {
// 	passport.authenticate('facebook', function(err, user, info){
// 		if (!user) {
// 			return res.status(401).end();
// 		}
// 		req.logIn(user, function(err){
// 			return res.status(200).end();
// 		});
// 	})(req, res, next);
// }

var requireAuth = function(req, res, next) {
	if(!req.isAuthenticated()) {
		return res.status(401).end();
	}
	next();
}

app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect: '/#/create', failureRedirect: '/'}));
app.post('/create', requireAuth, Game.addGame);
app.get('/player', function(req, res){
	res.json(req.user);
})
app.put('/player/:id', userController.addGame)

var port = 9011;

var databaseReference = "mongodb://localhost/truthOrTruth"
mongoose.connect(databaseReference);

var connection = mongoose.connection;
connection.once('open', function(){
	app.listen(port, function(){
		console.log('Listening at ' + port);
	});
	console.log('Connected at ' + databaseReference);
});