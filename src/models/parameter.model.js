import mongooseUtils from "../repository/mongoose.utils";
var Schema = mongoose.Schema;

var parameterSchema = new Schema({
    name: {type: String, required: true},
    value: {type: String, default: ""}
});

export default mongooseUtils.mongoose.model("Parameters", parameterSchema);

