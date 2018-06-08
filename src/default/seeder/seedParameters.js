import { Parameter } from "../../models/parameter.model";
import {mongoose} from "../../repository/common.repo";
var data = require('../data/Parameters.json');
var seeder = require('mongoose-seeder');

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
