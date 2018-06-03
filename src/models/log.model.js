import { mongoose } from "../repository/common.repo";
import {Card} from "./card.model";
var Schema = mongoose.Schema;

var logSchema = new Schema({
    cardId: { type: String, required: true},
    card: { type: Array, required: true},
    timestamp: { type: Date, default: Date.now(), timestamp: true}
});

var Log = mongoose.model("Logs", logSchema);

export { Log }