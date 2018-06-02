import { mongoose } from "../repository/common.repo";
var mongooseUniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var parameterSchema = new Schema({
   name: {type: String},
   value: {type: String}
});

var Parameter = mongoose.model("Parameter", parameterSchema);
export { Parameter }
