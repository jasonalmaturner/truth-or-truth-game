var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = mongoose.Schema.Types.ObjectId;

var question = new Schema({
	to: { type: String },
	question { type: String }
})