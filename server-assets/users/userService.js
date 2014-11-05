var User = require('./userModel'),
	Q = require('q');

module.exports = {

	addGame: function (req){
		var deferred = Q.defer();
		return User.findOne({_id: req.params.id}).exec(function(err, res){
			res.game = req.body;
			res.save(function(err, res){
				if(err) deferred.reject(new Error(err));
				return deferred.resolve(res);				
			})
		});
		return deferred.promise;
	}

}