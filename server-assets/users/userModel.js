var mongoose = require('mongoose');
var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;

var user = new Schema({
	provider: { type: String },
	providerUserId: { type: String },
	displayName: { type: String },
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
	}],
	facebookId: { type: String },
	facebook: { type: Schema.Types.Mixed },
	game: { 
		ref: { type: ObjectId, ref: 'Game' },
		hat: { type: Boolean, default: false }
	}

})

module.exports = mongoose.model('User', user)