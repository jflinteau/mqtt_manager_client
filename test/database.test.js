import { MqttConfiguration } from '../src/models/mqttConfiguration.model';
import { Card } from '../src/models/card.model';

describe("Test with Database", () => {
    test("Add a card to MongoDB", () => {
        var parameter = new Parameter({
            name: "Temperature",
            value: "60"
        });

        var piece = new Piece({
            parameter: parameter
        });

        var card = new Card({
            piece: piece,
            date: new Date()
        });

        expect(card).not.toBeUndefined();
        expect(piece.parameter).toBe(parameter);
        expect(card.piece).toBe(piece);
    });

    test("Add a card to MongoDB", () => {
        var card = new Card();
        card.save((err, result) => {
            expect(err).toBe(null);
            expect(result).toBeDefined();
        })
    });

    test("Remove test messages from MongoDB", () => {
        Message.deleteMany({content: /This is a test/}, (err) => {
            expect(err).toBe(null);
        });
    });
});