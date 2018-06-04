import { Parameter } from "../models/parameter.model";

class ParameterFactory{
    constructor(){ }

    static create(type=''){
        if(type == '') throw new Error("You must have a type");
        switch (true) {
            case type == "temperature":
                // TODO: Create temperature parameter
                break;
            case type == "humidity":
                // TODO: Create humidity parameter
                break;
            case type == "pressure":
                // TODO: Create a pressure parameter
                break;
            case type == "isSunny":
                // TODO: Create an isSunny parameter
                break;
            case type == "isRainy":
                // TODO: Create an isRainy parameter
                break;
            case type == "light":
                // TODO: Create a light parameter
                break;
            default:
                throw new Error("This type doesn't exists");
        }
    }

}