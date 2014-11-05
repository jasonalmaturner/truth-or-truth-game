var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.Types.ObjectId;

var question = new Schema({
	to: { type: String },
	question { type: String }
})

// Delete this file? I don't think I need it anymore