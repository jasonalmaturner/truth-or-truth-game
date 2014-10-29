var userModel = require('./userModel');

module.exports = {
	
	findOrCreate: function (req, res) {
		userModel.find().exec(function(err, users){
			res.send(users);
		})
	}

}