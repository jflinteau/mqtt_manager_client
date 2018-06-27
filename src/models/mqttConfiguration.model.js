
import { mongoose } from "../repository/mongooseUtils.utils";
import { model } from "mongoose";
var mongooseUniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var configurationSchema = new Schema({
   cardId: { type: String, required: true },
   parameter: { type: String,  required: true}
});

var MqttConfiguration = mongoose.model('MqttConfigurations', configurationSchema);

export { MqttConfiguration }