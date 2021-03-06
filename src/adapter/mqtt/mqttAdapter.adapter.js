var mqtt = require('mqtt');
import MqttConfiguration from "../../models/mqttConfiguration.model";
import { handleNewLogs } from "../../handler/logs.handle";

var client = null;

class MqttAdapter {
    constructor() {
        this.mqttAddress = process.env.MQTT_ADDRESS || "127.0.0.1";
        this.mqttPort = process.env.MQTT_PORT || 1883;
        this.clientId = process.env.client_ID || 'client_id';
        client = mqtt.connect({host: this.mqttAddress, port: this.mqttPort});
        client.on('connect', this.onConnect);
        client.on('message', this.onMessageArrived);
        client.on('close', this.onConnectionLost);
    }

    sendMessage(topic, payload) {
        client.publish(topic, payload);
    }

    disconnect() {
        client.end();
    }

    /*
    * @PARAM cardId: string
    * @PARAM parameter: string
    */
    suscribeToTopic(cardId, parameter) {
        client.subscribe(`iot-weather/${cardId}/${parameter}`);
    }

    onConnect() {
        MqttConfiguration.find().then((mqttConfigurations) => {
            if (mqttConfigurations.length > 0) {
                mqttConfigurations.forEach((configuration) => {
                    console.error(`This is a configuration :\n${configuration}`);
                    client.subscribe(`iot-weather/${configuration.cardId}/${configuration.parameter}`);
                    console.error(`iot-weather/${configuration.cardId}/${configuration.parameter}`);
                });
            }
        });
    }

    onConnectionLost(){
        console.log("Connection lost");
    }

    onMessageArrived(topic, message){
        var array = topic.split('/');
        let cardId = array[1];
        let parameter = array[2];
        let parameterValue = message;
        handleNewLogs(cardId, parameter, parameterValue);
    }
}


var instance = new MqttAdapter();

export default instance;
