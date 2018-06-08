import { Parameter } from "../models/parameter.model";

class ParameterFactory{

    static async create(type){
        console.error(type);
        switch (type) {
            case "temperature":
                return await Parameter.findOne({"name": "temperature"});
            case "humidity":
                return await Parameter.findOne({"name": "humidity"});
            case "pressure":
                return await Parameter.findOne({"name": "pressure"});
            case "isSunny":
                return await Parameter.findOne({"name": "isSunny"});
            case "isRainy":
                return await Parameter.findOne({"name": "isRainy"});
            case "light":
                return await Parameter.findOne({"name": "light"});
            default:
                throw new Error("This type doesn't exists");
        }
    }

}

export { ParameterFactory }