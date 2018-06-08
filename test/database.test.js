import { MqttConfiguration } from '../src/models/mqttConfiguration.model';
import { mongoose } from "../src/repository/common.repo";
import { Card } from '../src/models/card.model';
import { Log } from "../src/models/log.model";
import { Parameter } from "../src/models/parameter.model";
import { PieceBuilder } from "../src/builders/piece.builder";
import { ParameterFactory } from "../src/factory/parameter.factory";
import seeder from "../src/default/seeder/seedParameters";

const cardId = "E3:23:12:44:22";
const parameter = "temperature";

afterAll(() => {
    mongoose.connection.close();
});

beforeAll(() => {
    var hasError = true;
    try {
        seeder.seedParameters();
        hasError = false;
    }catch(err){
        expect(err).toBe(null);
    }finally {
        expect(hasError).toBe(false);
    }
})

describe("Test CRUD with Card Model", () => {
    var card = undefined;
    var piece = undefined;

    test("Create a card for MongoDB", () => {
        expect(card).toBeUndefined();
        expect(piece).toBeUndefined();

        piece = new PieceBuilder().makeName("RPI 3").makeNewParameter({name: "Temperature", value: "100"}).build();

        card = new Card({
            cardId: cardId,
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

describe("Test CRUD with MqttConfiguration", () => {
    var mqttConfiguration = undefined;

    test("Create a mqtt confiuration", () => {
        expect(mqttConfiguration).toBeUndefined();

        mqttConfiguration = new MqttConfiguration({
            cardId: cardId,
            parameter: parameter
        });

    });

    test("Save Mqtt Configuration", (done) => {
       expect(mqttConfiguration).toBeDefined();
       mqttConfiguration.save((err,result) => {
          expect(err).toBe(null);
          expect(result).toBeDefined();
          done();
       });
    });

    test('Find Mqtt Configurations', (done) => {
       MqttConfiguration.findOne({'cardId' : cardId}, '', (err, config) => {
           expect(err).toBe(null);
           expect(config.cardId).toBe(cardId);
           expect(config.parameter).toBe(parameter);
           done();
       });
    });

    test('Delete Mqtt Configuration', (done) => {
        MqttConfiguration.deleteMany({ 'cardId': cardId }, (err) => {
            expect(err).toBe(null);
            done();
        });
    });

});

describe("Test CRUD with Log", () => {
    var card = undefined;
    var log = undefined;

    test("Create a card for MongoDB", () => {
        expect(card).toBeUndefined();

        var piece = new PieceBuilder().makeName("RPI 3").makeNewParameter({name: "Temperature", value: "100"}).build();

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

    test("Save a Card to MongoDB", (done) => {
       expect(card).toBe(card);
       card.save((err, result) => {
          expect(err).toBe(null);
          expect(result).toBeDefined();
          done();
       });
    });

    test("Create a log for MongoDB", () =>{
        expect(log).toBeUndefined();

        log = new Log({
            timestamp: new Date(),
            card: [
                card
            ],
            cardId: card.cardId
        });

        expect(log).not.toBeUndefined();
        expect(log.card[0]).toBe(card);
    });

    test("Save the log", (done) => {
        expect(log).toBeDefined();
        log.save((err,result) => {
           expect(err).toBe(null);
           expect(result).toBeDefined();
           done()
        });
    });

    test("Find the log", (done) => {
        expect(log).toBe(log);

        Log.find({"cardId": cardId}, '', (err, log) => {
           expect(err).toBe(null);
           expect(log).toBe(log);
           done();
        });
    });
});

describe("Test parameter factory", () => {
    test("Generate error by not passing type argument",async () => {
        var hasError = true;
        try {
            var parameter = await ParameterFactory.create();
            expect(parameter).toBeUndefined();
            hasError = false;
        }catch(err){
            expect(err).toBeDefined();
        }finally {
            expect(hasError).toBe(true);
        }
    });

    test("Genereate an error by passing a argument that doesn't exist", () => {
        var hasError = true;
        try {
            var parameter = ParameterFactory.create("NoType");
            expect(parameter).toBeUndefined();
            hasError = false;
        }catch(err){
            expect(err).toBeDefined();
        }finally {
            expect(hasError).toBe(true);
        }

    });

    test("Generate Parameter object using temperature argument", async (done) => {
        var hasError = true;
        try {
            var parameter = await ParameterFactory.create("temperature");
            hasError = false;
            expect(parameter).not.toBe(null);
            expect(parameter).toBeDefined();
            expect(parameter.name).toBe('temperature');
            expect(parameter.value).toBe('0');
        }catch(err){
            expect(err).toBe(null);
        }finally {
            expect(hasError).toBe(false);
            done();
        }
    });

    test("Generate Parameter object using humidity argument", async (done) => {
        var hasError = true;
        try {
            var parameter = await ParameterFactory.create("humidity");
            hasError = false;
            expect(parameter).not.toBe(null);
            expect(parameter).toBeDefined();
        } catch (err) {
            expect(err).toBe(null);
        } finally {
            expect(hasError).toBe(false);
            done();
        }
    });

    test("Generate Parameter object using pressure argument", () => {
        var hasError = true;
        try {
            var parameter = ParameterFactory.create("pressure");
            hasError = false;
            expect(parameter).not.toBe(null);
            expect(parameter).toBeDefined();
        } catch (err) {
            expect(err).toBe(null);
        } finally {
            expect(hasError).toBe(false);
        }
    });

    test("Generate Parameter object using isSunny argument", () => {
        var hasError = true;
        try {
            var parameter = ParameterFactory.create("isSunny");
            hasError = false;
            expect(parameter).not.toBe(null);
            expect(parameter).toBeDefined();
        } catch (err) {
            expect(err).toBe(null)
        } finally {
            expect(hasError).toBe(false);
        }
    });

    test("Generate Parameter object using isRainy argument", async () => {
        var hasError = true;
        try {
            var parameter = await ParameterFactory.create("isRainy");
            hasError = false;
            expect(parameter).not.toBe(null);
            expect(parameter).toBeDefined();
        } catch (err) {
            expect(err).toBe(null);
        } finally {
            expect(hasError).toBe(false);
        }
    });

    test("Generate Parameter object using light argument", () => {
        var hasError = true;
        try {
            var parameter = ParameterFactory.create("light");
            hasError = false;
            expect(parameter).not.toBe(null);
            expect(parameter).toBeDefined();
        } catch (err) {
            expect(err).toBe(null);
        } finally {
            expect(hasError).toBe(false);
        }
    });

});


