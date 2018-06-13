import { MqttAdapter } from "../src/adapter/mqtt/mqttAdapter.adapter";

describe("Communication with MQTT Server", () => {
    var mqttAdapter = null;
    test('Connect to the MQTT Broker', () => {
        try {
            mqttAdapter = new MqttAdapter();
            expect(mqttAdapter).toBeDefined();
        }catch(err){
            expect(err).toBe(null);
        }
    })
});