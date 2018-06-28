import MqttAdapter from "../src/adapter/mqtt/mqttAdapter.adapter";
import mongooseUtils from "../src/repository/mongoose.utils";
import MqttConfigurations from '../src/models/mqttConfiguration.model';
import Log from '../src/models/log.model';
import { cardId, parameter } from "./database.test";

describe("Communication with MQTT Server", () => {
    var mqttAdapter = null;
    const topic = `iot-weather/${cardId}/${parameter}`;

    afterAll( () => {
        try {
            mongooseUtils.mongoose.disconnect();
            mqttAdapter.disconnect();
        }catch(e){
            console.error(e);
        }
    })

    test('Connect to the MQTT Broker', () => {
        try {
            mqttAdapter = MqttAdapter;
            expect(mqttAdapter).toBeDefined();
        }catch(err){
            expect(err).toBe(null);
        }
    });

    test('Suscribe to a card/parameter', () => {
        try{
            mqttAdapter.suscribeToTopic(cardId, parameter);
        }catch(e){
            expect(e).toBe(null);
        }
    });

    test('Send message to broker', () => {
        try{
            mqttAdapter.sendMessage(topic, '23');
        }catch (e) {
            expect(e).toBe(null);
        }
    });
});