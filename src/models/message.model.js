import { mongoose } from "../repository/common.repo";
import { model } from "mongoose";
var Schema = mongoose.Schema;

var messageSchema = new Schema({
    content: {type: String, required: true},
    
});

module.exports = mongoose.model('Message', messageSchema);