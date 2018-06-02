import { MqttConfiguration } from '../src/models/mqttConfiguration.model';
import { mongoose } from "../src/repository/common.repo";
import { Card } from '../src/models/card.model';
import { Piece } from '../src/models/piece.model';
import { Parameter } from '../src/models/parameter.model';

describe("Test the Database", () => {
    var card = undefined;
    var piece = undefined;
    var parameter = undefined;
    test("Create a card for MongoDB", () => {
        expect(card).toBeUndefined();
        expect(piece).toBeUndefined();
        expect(parameter).toBeUndefined();

        parameter = new Parameter({
            name: "Temperature",
            value: "60"
        });

        piece = new Piece({
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

    test("Save a card to mongoDB", () => {
        card.save((err, result) => {
            expect(err).toBe(null);
            expect(result).toBeDefined();

            if(err) return handleError(err);
        })
    });

    test("Save piece to mongoDB", () => {
        piece.save((err, result) => {
            expect(err).toBe(null);
            expect(result).toBeDefined();

            if(err) return handleError(err);
        })
    });

    test("Save parameter to mongoDB", () => {
        parameter.save((err, result) => {
            expect(err).toBe(null);
            expect(result).toBeDefined();

            if(err) return handleError(err);

        });
    });

    test("Disconnect database", () => {
        var worked = undefined;
        try {
           mongoose.connection.close(() => { });
           worked = true;
        }catch(err) {
            expect(err).toBe(null);
        }
        expect(worked).toBe(true);
    })

});