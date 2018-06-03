import { mongoose } from "../repository/common.repo";
var Schema = mongoose.Schema;

var parameterSchema = new Schema({
    name: {type: String, required: true},
    value: {type: String, required: true}
});

var Parameter = mongoose.model("Parameters", parameterSchema);

export { Parameter };
