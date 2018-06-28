import  Card  from "./src/models/card.model";
import { PieceBuilder} from "./src/builders/piece.builder";
import { ParameterFactory } from "./src/factory/parameter.factory";
import mqttAdapter from "./src/adapter/mqtt/mqttAdapter.adapter";

export const cardId = "E3:23:12:44:22";
export const parameter = "Temperature";
const topic = `iot-weather/${cardId}/${parameter}`;
console.log(topic);
var card = new Card({
    pieces: [
        new PieceBuilder().makeName("RPI 3").makeNewParameter({ name: "Temperature", value: "10000" }).build()
    ],
    cardId: "E3:23:12:44:22",
});
async function param(){

    var parameter = await ParameterFactory.create("temperature");
    console.log("This is a parameter");
    console.log(parameter);
}

param();

card.save();

mqttAdapter.sendMessage(topic, '23');

console.log(card);
console.log("It works");