import { mongoose } from "../repository/common.repo";
import { model } from "mongoose";
var Schema = mongoose.Schema;

var messageSchema = new Schema({
    card : { type: Schema.Types.ObjectId, ref: 'Card', required: true},
    parameter : { Type: Schema.Types.ObjectId, ref: "Parameter", required: true},
    content: {type: String, required: true},
});

var Message = mongoose.model('Message', messageSchema);
export { Message };