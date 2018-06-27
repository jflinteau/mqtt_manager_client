import mongooseUtils from "../repository/mongoose.utils";
import Card from "./card.model";
var Schema = mongoose.Schema;

var logSchema = new Schema({
    cardId: { type: String, required: true},
    card: { type: Array, required: true},
    timestamp: { type: Date, default: Date.now(), timestamp: true}
});

export default mongooseUtils.mongoose.model("Logs", logSchema);

