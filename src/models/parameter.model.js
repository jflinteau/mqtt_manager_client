import { mongoose } from "../repository/mongooseUtils.utils";
var Schema = mongoose.Schema;

var parameterSchema = new Schema({
    name: {type: String, required: true},
    value: {type: String, default: ""}
});

var Parameter = mongoose.model("Parameters", parameterSchema);

export { Parameter };
