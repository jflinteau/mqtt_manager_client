import { mongoose } from "../repository/common.repo";
import { model } from "mongoose";
var Schema = mongoose.Schema;

var pieceSchema = new Schema({
    piece : { type : Piece }
});

var Piece = mongoose.model('Piece', pieceSchema);
export { Piece };