var User = require('./userModel'),
	userService = require('./userService');

module.exports = {
	
	findOrCreate: function (req, res) {
		User.find().exec(function(err, users){
			res.send(users);
		})
	},

	addGame: function (req, res) {
		userService.addGame(req).then(function(err, res){
			if(err){
				res.send(err);
			} else {
				res.status(200).send(res);
			}
		})
	}

}