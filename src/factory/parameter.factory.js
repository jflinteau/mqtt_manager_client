import { Parameter } from "../models/parameter.model";
var data = require('../default/data/Parameters.json');

class ParameterFactory{

    static async find(type){
        return await data.parameter.find( param => {
            return param.name = type;
        });
    }

    static async create(type){
        switch (type) {
            case "temperature":
                return await this.find(type);
            case "humidity":
                return await this.find(type);
            case "pressure":
                return await this.find(type);
            case "isSunny":
                return await this.find(type);
            case "isRainy":
                return await this.find(type);
            case "light":
                return await this.find(type);
            case '':
                throw new Error("String shouldn't be empty");
            case undefined:
                throw new Error("Undefined type doesn't work");
            default:
                throw new Error("This type doesn't exists");
        }
    }

}

export { ParameterFactory }