var mqtt = require('mqtt');

class MqttAdapter{
    constructor(){
        this.mqttAddress = process.env.MQTT_ADDRESS || "127.0.0.1";
        this.mqttPort = process.env.MQTT_PORT || 1887;
        this.clientId = process.env.CLIENT_ID || 'client_id';
        this.client = mqtt.connect(`mqtt://${this.mqttAddress}:${this.mqttPort}`);
    }

    sendMessage(topic, payload){

    }

    onConnect(){

    }

    onConnectionLost(){

    }

    onMessageArrived(message){

    }
}

export {
    MqttAdapter
}