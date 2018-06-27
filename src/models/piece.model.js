import mongooseUtils from "../repository/mongoose.utils";
var Schema = mongooseUtils.mongoose.Schema;

var pieceSchema = new Schema({
    pieceName: {type: String},
    parameters: { type: Array, default: []}
});

export default mongooseUtils.mongoose.model('Pieces', pieceSchema);

