import { mongoose } from "../repository/common.repo";
var Schema = mongoose.Schema;

var parameterSchema = new Schema({
    name: {type: String, required: true},
    value: {type: String, default: ""}
});

var Parameter = mongoose.model("Parameters", parameterSchema);

export { Parameter };
