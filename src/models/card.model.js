import mongooseUtils from "../repository/mongoose.utils";
var mongooseUniqueValidator = require('mongoose-unique-validator');
var Schema = mongooseUtils.mongoose.Schema;

var cardSchema = new Schema({
    cardId: {type: String, required: true},
    pieces : { type: Array, required: true},
    date: {type: Date, default: new Date()}
});

cardSchema.plugin(mongooseUniqueValidator);

export default mongooseUtils.mongoose.model('Cards', cardSchema);
