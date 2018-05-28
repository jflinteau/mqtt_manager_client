import { mongoose } from "../repository/common.repo";
import { model } from "mongoose";
var Schema = mongoose.Schema;

var messageSchema = new Schema({
    content: {type: String, required: true},
});

var Message = mongoose.model('Message', messageSchema);
export { Message };