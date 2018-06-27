import MqttAdapter from "../src/adapter/mqtt/mqttAdapter.adapter";
import mongooseUtils from "../src/repository/mongoose.utils";

describe("Communication with MQTT Server", () => {
    var mqttAdapter = null;
    var cardId = '00-00-00';
    var parameter = 'temperature';
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