import { Card } from "./src/models/card.model";
import { PieceBuilder} from "./src/builders/piece.builder";


var card = new Card({
    pieces: [
        new PieceBuilder().makeName("RPI 3").makeNewParameter({ name: "Temperature", value: "10000" }).build()
    ],
    cardId: "E3:23:12:44:22",
});

card.save();

console.log(card);
console.log("It works");