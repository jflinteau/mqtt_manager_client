import { mongoose } from "../repository/common.repo";
var mongooseUniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var pieceSchema = new Schema({
   parameter: { type: Schema.ObjectId, ref:"Parameter" },
   name: { type: String }
});

mongooseUniqueValidator(pieceSchema);

var Piece =  mongoose.model('Piece', pieceSchema);

export { Piece }
