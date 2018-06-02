import { MqttConfiguration } from '../src/models/mqttConfiguration.model';
import { mongoose } from "../src/repository/common.repo";
import { Card } from '../src/models/card.model';
import { PieceBuilder } from "../src/builders/piece.builder";
import { Parameter } from '../src/models/parameter.model';

describe("Test the Database", () => {
    var card = undefined;
    var piece = undefined;
    var parameter = undefined;
    test("Create a card for MongoDB", () => {
        expect(card).toBeUndefined();
        expect(piece).toBeUndefined();

        piece = new PieceBuilder().makeName("RPI 3").makeNewParameter({name: "Temperature", value: "100"}).build();

        card = new Card({
            cardId: "E3:23:12:44:22",
            pieces: [
                piece
            ],
            date: new Date()
        });

        expect(card).not.toBeUndefined();
        expect(card.pieces[0]).toBe(piece);
    });

    test("Save a card to mongoDB", (done) => {
        card.save((err, result) => {
            expect(err).toBe(null);
            expect(result).toBeDefined();
            if(err) return handleError(err);
            done();
        })
    });


    test("Find a card", (done) => {
        Card.findOne({ 'cardId': card.cardId}, "", (err, card) => {
            expect(err).toBe(null);
            expect(card).toBeDefined();
            expect(card).not.toBe(null);
            expect(card.pieces[0].name).toBe(piece.name);
            expect(card.pieces[0]._id.toString()).toBe(piece._id.toString());
            done();
       })
    });

    test("Delete test values", (done) => {
       Card.deleteMany({"cardId":"E3:23:12:44:22"}, (err) => {
           expect(err).toBe(null);
           done();
       })
    });
});