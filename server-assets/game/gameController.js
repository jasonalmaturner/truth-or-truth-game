var gameModel = require('./gameModel');

module.exports = {

	addGame: function (req, res) {
		var newGame = new gameModel(req.body);
		newGame.save(function (err) {
			if(err){
				res.send(err);
			} else {
				res.status(200).send(req.body.name + ' was successfully added')
			}
		});
	}

}