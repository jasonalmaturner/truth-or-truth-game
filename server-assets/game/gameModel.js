var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var game = new Schema({
	name: {type: String, require: true, max: 10, uniqueness: true },
	questions: [{
		addressee: { type: String, require: true },
		question: { type: String, require: true }
	}]
})

module.exports = mongoose.model('Game', game);