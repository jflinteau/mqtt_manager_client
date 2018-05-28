import { mongoose } from "../repository/common.repo";
import { model } from "mongoose";
var Schema = mongoose.Schema;

var pieceSchema = new Schema({
    parameters : [ 'Parameter' ]
});

var Piece = mongoose.model('Piece', pieceSchema);
export { Piece };