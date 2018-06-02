
import { mongoose } from "../repository/common.repo";
import { model } from "mongoose";
var mongooseUniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var configurationSchema = new Schema({
    'card': {type: Schema.ObjectId, ref: 'Card'}
});

var MqttConfiguration = mongoose.model('MqttConfiguration', configurationSchema);

export { MqttConfiguration }