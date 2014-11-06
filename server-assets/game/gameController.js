var gameModel = require('./gameModel'),
	gameService = require('./gameService');

module.exports = {

	addGame: function (req, res) {
		var newGame = new gameModel(req.body);
		newGame.save(function (err, data) {
			if(err){
				res.send(err);
			} else {
				res.status(200).send(data)
			}
		});
	},

	addQuestion: function (req, res) {
		gameService.addQuestion(req).then(function(err, res){
			if(err){
				res.send(err);
			} else {
				res.status(200).send(res);
			}
		})
	},

	getGames: function (req, res) {
		gameModel.find().exec(function(err, games){
			res.send(games);
		})
	}

}