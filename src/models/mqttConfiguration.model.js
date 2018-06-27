
import mongooseUtils from "../repository/mongoose.utils";
var mongooseUniqueValidator = require('mongoose-unique-validator');
var Schema = mongooseUtils.mongoose.Schema;

var configurationSchema = new Schema({
   cardId: { type: String, required: true },
   parameter: { type: String,  required: true}
});

export default mongooseUtils.mongoose.model('MqttConfigurations', configurationSchema);

