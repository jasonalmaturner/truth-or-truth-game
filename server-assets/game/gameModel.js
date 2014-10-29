var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var game = new Schema({
	name: {type: String, require: true, max: 10 }
})