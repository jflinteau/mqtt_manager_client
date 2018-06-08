import { Parameter } from "../../models/parameter.model";
import {mongoose} from "../../repository/common.repo";
var data = require('../data/Parameters.json');
var seeder = require('mongoose-seeder');

class Seeder{
    constructor(){ }

    seedParameters(){
        Parameter.collection.drop();
        data.parameter.forEach((p) => {
            var param = new Parameter(p);
            param.save((err) => {
                if(err) throw err;
            });
        });
    }
}

var instance = new Seeder();
export default instance
