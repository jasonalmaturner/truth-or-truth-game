var User = require('./userModel'),
	Q = require('q');

module.exports = {

	addGame: function (req){
		console.log('Test');
		var deferred = Q.defer();
		return User.findOne({_id: req.params.id}).exec(function(err, res){
			res.game = req.body;
			console.log(req.body);
			res.save(function(err, res){
				if(err) deferred.reject(new Error(err));
				return deferred.resolve(res);				
			})
		});
		return deferred.promise;
	}

}