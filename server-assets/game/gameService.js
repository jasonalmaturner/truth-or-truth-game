var Game = require('./gameModel'),
	Q = require('q');

	module.exports = {

		addQuestion: function (req){
			console.log('Test');
			var deferred = Q.defer();
			return Game.findOne({_id: req.params.id}).exec(function(err, res){
				console.log(req.body);
				res.questions.push(req.body);
				res.save(function(err, res){
					if(err) deferred.reject(new Error(err));
					return deferred.resolve(res);
				})
			});
			return deferred.promise;
		}

	}