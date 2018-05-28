import { mongoose } from "../repository/common.repo";
import { model } from "mongoose";
var Schema = mongoose.Schema;

var cardSchema = new Schema({
    piece : { type : Piece }
});

var Card = mongoose.model('Card', messageSchema);
export { Card };