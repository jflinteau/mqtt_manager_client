
import { mongoose } from "../repository/common.repo";
import { model } from "mongoose";
var mongooseUniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var configurationSchema = new Schema({
   cardId: { type: String, required: true },
   parameter: { type: String,  required: true}
});

var MqttConfiguration = mongoose.model('MqttConfiguration', configurationSchema);

export { MqttConfiguration }