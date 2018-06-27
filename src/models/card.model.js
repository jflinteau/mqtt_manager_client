import mongooseUtils from "../repository/mongooseUtils.utils";
var mongooseUniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var cardSchema = new Schema({
    cardId: {type: String, required: true},
    pieces : { type: Array, required: true},
    date: {type: Date, default: new Date()}
});

cardSchema.plugin(mongooseUniqueValidator);

var Card = mongoose.model('Cards', cardSchema);
export { Card };