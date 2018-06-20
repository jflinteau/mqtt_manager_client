import { Parameter } from "../../models/parameter.model";
var data = require('../data/Parameters.json');

class Seeder{
    constructor(){ }

    async seedParameters(){
        Parameter.collection.drop();
        data.parameter.forEach((param) => {
            var p = new Parameter({
                name: param.name,
                value: param.value
            });
            p.save();
        });
    }
}

var instance = new Seeder();
export default instance
