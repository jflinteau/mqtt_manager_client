var mqtt = require('mqtt');
import { MqttConfiguration } from "../../models/mqttConfiguration.model";

class MqttAdapter{
    constructor(){
        this.mqttAddress = process.env.MQTT_ADDRESS || "127.0.0.1";
        this.mqttPort = process.env.MQTT_PORT || 1887;
        this.clientId = process.env.CLIENT_ID || 'client_id';
        this.client = mqtt.connect('mqtt://' + this.mqttAddress);
        this.client.on('connect', this.onConnect);
        this.client.on('message', this.onMessageArrived);
    }

    sendMessage(topic, payload){
        console.error(topic);
        this.client.publish(topic, payload);
    }

    /*
    *
    * @PARAM cardId: string
    * @PARAM parameter: string
    *
    */
    suscribeToTopic(cardId, parameter){
        this.client.subscribe(`iot-weather/${cardId}/${parameter}`);
    }

    onConnect(){
        console.error("I am connected, here");
        var mqttConfigurations = MqttConfiguration.find();
        if(mqttConfigurations.length > 0 ) {
            mqttConfigurations.forEach((configuration) => {
                this.client.subscribe(`iot-weather/${configuration.cardId}/${configuration.parameter}`);
            });
        }
    }

    onConnectionLost(){

    }

    onMessageArrived(topic, message){
        console.error(`This is the topic: \n ${topic}\n this is the message ${message}`);
    }
}


var instance = new MqttAdapter();

export default instance;
