var express = require('express'),
	bodyParser = require('body-parser'),
	app = express(),
	session = require('express-session'),
	cors = require('cors'),
	mongoose = require('mongoose'),
	passport = require('passport'),
	FacebookStrategy = require('passport-facebook').Strategy,
	User = require('./server-assets/users/userController');


app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use(session({secret: 'quando omni flunkus moritati'}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new FacebookStrategy({
	clientID: '626195034163705',
	clientSecret: '49d3d82ad4dba3545189e631458e55d0',
	callbackURL: '/create'
}, function(token, refreshToken, profile, done){
	User.findOne({'facebook.id': profile.id}, function(err, user) {
		if(err){
			return done(err);
		} if (!user) {
			var user = new User({
				name: profile.displayName,
				email: profile.emails[0].value,
				username: profile.username,
				provider: 'facebook',
				facebook: profile._json
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
	done(null, user);
});

passport.deserializeUser(function(obj, done){
	done(null, obj);
});

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