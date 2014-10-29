var mongoose = require('mongoose');
var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;

var user = new Schema({
	provider: { type: String },
	providerUserId: { type: String },
	displayName: { type: String, required: true },
	accessToken: { type: String },
	userId: { type: ObjectId, ref: 'User' },
	name: { type: Object, 
		familyName: { type: String },
		givenName: { type: String },
		middleName: { type: String }
	},
	emails: [{ type: Array,
			value: { type: String },
			type: { type: String },
	}],
	photos: [{ type: Array, 
		value: { type: String },
	}]
})

module.exports = mongoose.model('User', user)