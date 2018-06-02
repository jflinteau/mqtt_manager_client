import { MqttConfiguration } from '../src/models/mqttConfiguration.model';
import { Card } from '../src/models/card.model';
import { Piece } from '../src/models/piece.model';
import { Parameter } from '../src/models/parameter.model';

describe("Test the Database", () => {
    var card = undefined;
    test("Create a card for MongoDB", () => {
        expect(card).toBeUndefined();
        var parameter = new Parameter({
            name: "Temperature",
            value: "60"
        });

        var piece = new Piece({
            parameter: parameter,
            name: "RPI"
        });

        card = new Card({
            piece: piece,
            date: new Date()
        });

        expect(card).not.toBeUndefined();
        expect(piece.parameter).toBe(parameter);
        expect(card.piece).toBe(piece);
    });

    test("Save a user to mongoDB", () => {
        card.save((err, result) => {
            expect(err).toBe(null);
            expect(result).toBeDefined();

            if(err) return handleError(err);
        })
    });

});