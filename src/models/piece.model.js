import { mongoose } from "../repository/mongooseUtils.utils";
var Schema = mongoose.Schema;

var pieceSchema = new Schema({
    pieceName: {type: String},
    parameters: { type: Array, default: []}
});

var Piece = mongoose.model('Pieces', pieceSchema);

export { Piece }
