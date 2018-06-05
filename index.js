import { Card } from "./src/models/card.model";
import { PieceBuilder} from "./src/builders/piece.builder";
import { ParameterFactory } from "./src/factory/parameter.factory";

var card = new Card({
    pieces: [
        new PieceBuilder().makeName("RPI 3").makeNewParameter({ name: "Temperature", value: "10000" }).build()
    ],
    cardId: "E3:23:12:44:22",
});
async function param(){

    var parameter = await ParameterFactory.create("temperature");

    console.log(parameter);
}

param();

card.save();

console.log(card);
console.log("It works");