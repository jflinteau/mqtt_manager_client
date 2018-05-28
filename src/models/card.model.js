import { mongoose } from "../repository/common.repo";
import { model } from "mongoose";
var mongooseUniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var cardSchema = new Schema({
    piece : { type: Schema.ObjectId, ref: 'Piece', required: true}
});

cardSchema.plugin(mongooseUniqueValidator);

var Card = mongoose.model('Card', cardSchema);
export { Card };